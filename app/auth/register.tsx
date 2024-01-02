import Image from "next/image";
import skillData from '../skillData';
import google from "C:/Users/toshiba/Documents/coding/work/skillconnect/public/assets/icons/icons8-google-48.png";
import Hide from "../../public/assets/icons/icons8-closed-eye-24.png"
import Show from "../../public/assets/icons/icons8-eye-30.png"
import React, { useEffect, useState } from "react";
import { z } from 'zod';
import Avater from "./avater";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";

interface sttep {
    val?: boolean;
    username?: string;
    skills?: string[]
}
interface sign {
     name: string;
     signature: boolean
}
interface error {
     email: string | null;
     password: string | null
}

interface formdat {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  skills : sign[];
  image: any
}

type Props = {
     state: boolean;
     setState: (val: boolean) => void;
     formdata: formdat;
     setFormdata: any;
}
const schema = z.object({
     email: z.string().email(),
     password: z.string().min(8),
});
export default function Register ({ setState, state, formdata, setFormdata } : Props) {
     const [data, setData] = useState<string[]>([])
     const [skill, setSkill] = useState<boolean>(false)
     const [step, setStep] = useState<sttep>({val: false})
     const [toast, setToast] = useState<error>({
               email: null,
               password: null
     })
     const [searched, setSearched] = useState<string>("")
     const [showPassword, setShowPassword] = useState(false);
     const router = useRouter()

     function handlechange (event : React.ChangeEvent<HTMLInputElement>){
          event.preventDefault();
          setToast(val=>({email: null, password: null}));
          const {name, value} = event.target;
          setFormdata((prevFormData : any) => ({
                         ...prevFormData,
                         [name]: value
                    })
               )
     }
     const titles = Object.values(skillData).flat()
     const MAX_SKILLS = 3;

     useEffect(() => {
          setData(titles)
          const allSkill: sign[] = titles.map((each) => ({ name: each, signature: false }));
          setFormdata((prev :any) => ({ ...prev, skills: allSkill }));
     },[])

     const sortByRelevancy = (a : string, b: string) => {
          const relevanceA = calculateRelevance(a);
          const relevanceB = calculateRelevance(b);
     
          return relevanceB - relevanceA;
        };
        
     const calculateRelevance = (skill: string) => {
          return skill.toLowerCase().includes(searched.toLowerCase()) ? 1 : 0;
     };

     function skillSearch (e :React.ChangeEvent<HTMLInputElement>){
        setSearched(e.target.value)
        data.sort(sortByRelevancy)
     }

     function validation(): boolean {
          setToast(val=>({email: null, password: null}));
          const result = schema.safeParse({email: formdata.email, password: formdata.password})
          if(!result.success){
               const formatted = result.error.format() 
               if(formatted.email?._errors){
               setToast(val=>({ ...val, email: "Invalid email address"}))
               return false
               }
               if(formatted.password?._errors){
               setToast(val=>({ ...val, password: "Password must be minimum of 8 letters"}))
               return false
               }
          }
          return true
     }

     const skillController = (id: string) => {
          const selectedSkillsCount = formdata.skills.filter((skill) => skill.signature).length;
          let nature = false
          if (selectedSkillsCount <= MAX_SKILLS) {
               nature = true
          }
          setFormdata((prev: any) => ({
               ...prev,
               skills: prev.skills.map((skill :sign) =>
                    skill.name === id ? { ...skill, signature: nature ? !skill.signature : false } : skill
               ),
          }));
     };

     const check = (id: string): boolean => {
          return formdata.skills.some((skill) => skill.name === id && skill.signature);
     };

     const handlesubmit = async (e: React.MouseEvent<HTMLButtonElement>) =>{
          e.preventDefault();
          if(validation()){
               try {
                    await axios.post("/api/auth/signup", {...{email: formdata.email, password:formdata.password}})
                    router.push('/home')
              
                  } catch (error) {
                    console.log(error)
                  }
          }
     }

     const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
          setStep((prev)=>({...prev, val: true}))
          };


   return (
        <div className="bg-white flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 z-10">
         <article className="w-[98vw] max-w-[350px] h-fit bg-white border-2 border-neutral-500 flex flex-col justify-center items-center px-[50px] pb-[25px] relative">
             <div className={`left-0 right-0 bottom-0 ${step.val ? "h-full" : "overflow-hidden h-0"} absolute transition-all z-10 trans`}>
              <section className="w-full h-full relative flex flex-col items-center bg-white ">
               <article className="mt-5">
                         <Avater image={formdata.image} setImage={setFormdata} type="xl" />
                    </article>
                    <article className="flex flex-col gap-[12px] justify-center items-center mt-4">
                    <input type="text" className="w-[300px] h-[40px] text-black ps-[20px] rounded-lg border-2 border-neutral-400 bg-neutral-200 outline-none" name="firstname" placeholder="Firstname"></input>
                    <input type="text" className="w-[300px] h-[40px] text-black ps-[20px] rounded-lg border-2 border-neutral-400 bg-neutral-200 outline-none" name="lastname" placeholder="Lastname"></input>
                    </article>
                    <article className="mt-3 h-20 relative">
                         <div className="w-full flex m-2 items-end"><span className="font-medium text-black font-adamina mr-auto">Skills</span><span className="text-black font-inter text-sm mr-4">{formdata.skills.filter((skill) => skill.signature).length}/4 Skills</span></div>
                         <div className="w-[300px] h-[35px] text-black px-[10px] rounded-lg border-2 border-neutral-400 bg-neutral-200 flex items-center cursor-pointer" onClick={()=>setSkill((prev):boolean=>(!prev))}>
                              <span className="font-inter text-sm text-neutral-600">Select relevant skills</span>
                         </div>
                    </article>
                    <button  className="bg-csecondary text-white border-none rounded-[10px] w-[80%] h-[37px] cursor-pointer flex justify-center items-center font-manrope mt-[20px] hover:bg-cprimary transition-all">Continue</button>
                    <div className={`absolute left-0 right-0 bottom-0 ${skill ? "h-full" : "overflow-hidden h-0"} shadow-inner rounded-t-xl bg-white transition-all trans flex flex-col z-10`}>
                         <article className="flex mt-6 mb-4 items-center">
                              <input type="text" className="w-full mx-5 border-neutral-500 border-[1px] rounded-md text-xs h-8 ps-3 bg-transparent" placeholder="Search for skills" value={searched} onChange={(e)=>(skillSearch(e))} />
                              <span className="py-2 px-3 text-black mr-5 text-sm hover:bg-neutral-300 cursor-pointer rounded-md flex items-center" onClick={()=>setSkill((prev):boolean=>(!prev))}>Done</span>
                         </article>
                         <section className="relative w-full h-full">
                              <section className='absolute left-0 right-0 bottom-0 top-0 rounded-md bg-white shadow-md py-2 flex flex-col overflow-scroll'>
                              {data.map((each) => {
                                   const isChecked = check(each);
                                   return (
                                   <div
                                        key={each}
                                        id={each}
                                        className={`w-full hover:bg-opacity-20 hover:bg-cprimary px-4 py-2 font-inter text-sm flex items-center cursor-pointer ${
                                        isChecked ? 'bg-cprimary text-white' : ''
                                        }`}
                                        onClick={() => skillController(each)}
                                   >
                                        {each}
                                   </div>
                                   );
                              })}
                              </section>
                         </section>
                    </div>
              </section>
             </div>
              <h3 className="font-adamina text-3xl m-4 mb-8">Sign up</h3>
              <button className="flex bg-[lightblue] rounded-2xl py-[0.35rem] px-6 gap-4 items-center justify-center w-[300px]" onClick={() => signIn("google", { callbackUrl: "http://localhost:3000" })}>
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
              <div className="flex flex-col justify-center items-center">
                   <input type="text" className="w-[300px] h-[42px] text-black ps-[20px] rounded-lg border-2 border-neutral-400 bg-neutral-200 outline-none" name="email" placeholder="Email" onChange={(event) => handlechange(event)}></input>
                    {toast.email && (<span className="text-error text-sm font-inter self-start mt-1 ml-2">{toast.email}</span>)}
                   <div className="relative mt-[20px]">
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
                    {toast.password && (<span className="text-error text-sm font-inter self-start mt-1 ml-2">{toast.password}</span>)}
                   <button  className="mt-[30px] bg-csecondary text-white border-none rounded-[10px] w-[80%] h-[37px] cursor-pointer flex justify-center items-center font-manrope m-[10px] hover:bg-cprimary transition-all" onClick={handlesubmit}>Create account</button>
                   <span className="mt-[20px] text-black font-inter">Already have an account? <span className="ml-[5px] text-csecondary underline cursor-pointer hover:text-cprimary transition-all" onClick={()=> setState(false)}>Sign in</span></span>
              </div>
         </article>
        </div>
   );
 }