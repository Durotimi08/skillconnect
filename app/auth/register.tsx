import Image from "next/image";
import google from "C:/Users/toshiba/Documents/coding/work/skillconnect/public/assets/icons/icons8-google-48.png";
import Hide from "../../public/assets/icons/icons8-closed-eye-24.png"
import Show from "../../public/assets/icons/icons8-eye-30.png"
import defaultAva from "../../public/assets/icons/default_avatar.png"
import { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import Avater from "./avater";

interface sttep {
    val?: boolean;
    username?: string;
    skills?: string[]
}
type Props = {
     state: boolean;
     setState: (val: boolean) => void;
}
export default function Register ({ setState, state } : Props) {
    const [step, setStep] = useState<sttep>({val: false})
    const [toast, setToast] = useState<string>("")
    const [showPassword, setShowPassword] = useState(false);
    const [formdata, setFormdata] = useState({
         email: "",
         password: "",
         firstname: "",
         lastname: "",
         image: defaultAva
    })
    function checktoast(pop : string){
         setToast(pop)
    }
    const [error, setError] = useState(null);
    function handlechange (event : React.ChangeEvent<HTMLInputElement>){
         event.preventDefault();
         const {name, value} = event.target;
         setFormdata(prevFormData => ({
              ...prevFormData,
              [name]: value
         })
         )
    }
    const handlesubmit = async (e: React.MouseEvent<HTMLButtonElement>) =>{
         e.preventDefault();
         setToast("");
         setError(null); 
        }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setStep((prev)=>({...prev, val: true}))
        };

    const handleGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const provider = new GoogleAuthProvider()
        const { user } = await signInWithPopup(firebaseAuth, provider);
        alert(user)
        };
     
     function registration (){
          setState(false)
     }
   return (
        <div className="bg-white flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 z-10">
         <article className="w-[98vw] max-w-[350px] h-fit bg-white border-2 border-neutral-500 flex flex-col justify-center items-center px-[50px] pb-[25px] relative">
             <div className={`left-0 right-0 bottom-0 ${step.val ? "h-full" : "overflow-hidden h-0"} flex flex-col items-center bg-white absolute transition-all z-10 trans`}>
               <article className="mt-5">
                    <Avater image={formdata.image} setImage={setFormdata} type="xl" />
               </article>
               <article className="flex flex-col gap-[12px] justify-center items-center mt-4">
               <input type="text" className="w-[300px] h-[40px] text-black ps-[20px] rounded-lg border-2 border-neutral-400 bg-neutral-200 outline-none" name="firstname" placeholder="Firstname"></input>
               <input type="text" className="w-[300px] h-[40px] text-black ps-[20px] rounded-lg border-2 border-neutral-400 bg-neutral-200 outline-none" name="lastname" placeholder="Lastname"></input>
               </article>
               <article className="mt-3 h-20">
                    <div className="w-full flex m-2 items-end"><span className="font-medium text-black font-adamina mr-auto">Skills</span><span className="text-black font-inter text-sm mr-4">3/4 Skills</span></div>
                    <div className="w-[300px] h-[35px] text-black px-[10px] rounded-lg border-2 border-neutral-400 bg-neutral-200 flex items-center cursor-pointer">
                         <span className="font-inter text-sm text-neutral-600">Select relevant skills</span>
                    </div>
               </article>
               <button  className="bg-csecondary text-white border-none rounded-[10px] w-[80%] h-[37px] cursor-pointer flex justify-center items-center font-manrope mt-[20px] hover:bg-cprimary transition-all">Continue</button>
             </div>
              <h3 className="font-adamina text-3xl m-4 mb-8">Sign up</h3>
              <button className="flex bg-[lightblue] rounded-2xl py-[0.35rem] px-6 gap-4 items-center justify-center w-[300px]" onClick={handleGoogle}>
                <Image
                  src={google}
                  width={30}
                  height={30}
                  alt='google'
                  className='w-30 h-30'
                />
                <span className="text-ctertiary font-inter">Continue with google</span>
              </button>
              <p className="m-4">Or</p>
              <div className="flex flex-col gap-[20px] justify-center items-center">
                   <input type="text" className="w-[300px] h-[42px] text-black ps-[20px] rounded-lg border-2 border-neutral-400 bg-neutral-200 outline-none" name="email" placeholder="Email" onChange={(event) => handlechange(event)}></input>
                   <div className="relative">
                   <input type={showPassword ? 'text' : 'password'} className="w-[300px] h-[42px] text-black ps-[20px] pe-[10px] rounded-lg border-2 border-neutral-400 bg-neutral-200 outline-none" name="password" placeholder="Password" onChange={(event) => handlechange(event)}></input>
                   <button
                    className="absolute top-[4px] right-1 w-auto bg-neutral-200 p-2 hover:bg-neutral-300 rounded-[50%]"
                    onClick={togglePasswordVisibility}
                    >
                    <Image
                        src={showPassword ? Show: Hide}
                        width={20}
                        height={20}
                        alt='password'
                        />
                    </button>
                    </div>
                   <button  className="bg-csecondary text-white border-none rounded-[10px] w-[80%] h-[37px] cursor-pointer flex justify-center items-center font-manrope m-[10px] hover:bg-cprimary transition-all" onClick={handlesubmit}>Create account</button>
                   <span className="text-black font-inter">Already have an account? <span className="ml-[5px] text-csecondary underline cursor-pointer hover:text-cprimary transition-all" onClick={registration}>Sign in</span></span>
              </div>
              {toast !== "" &&  (<div className={`toast-${toast}`}>
              <div className="innertoast">
                   {toast === "good" ? (<span>Welcome to cloud</span>) : (<span>User already exists</span>)}
              </div>
         </div>)}
         </article>
        </div>
   );
 }