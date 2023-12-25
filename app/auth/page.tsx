"use client";
import React, { useState, useEffect } from 'react';
import { z, ZodError } from 'zod';
import {firebaseAuth} from "../utils/FirebaseConfig"
import { addUser } from "@/redux/features/user-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { GoogleAuthProvider } from 'firebase/auth/cordova';
import { getRedirectResult, signInWithRedirect } from 'firebase/auth';
import { useSearchParams, useRouter } from 'next/navigation';
import Login from './login';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormInput = z.infer<typeof schema>;
const AuthForm = () => {
  const userInfo = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<FormInput>({email: '', password: '', });
  const [register, setRegister] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  useEffect(()=>{
    let word : string | null = searchParams.get("id")
    if (word === "Oauth"){
      setRegister(true)
    }
  }, [searchParams]) 
  
  useEffect(() => {
      const result = schema.safeParse(formData)
      if(!result.success){
        const formatted = result.error.format()
        if(formatted.email?._errors){
          setIsEmailValid(false)
        }else{
          setIsEmailValid(true)
        }
        if(formatted.password?._errors){
          setIsPasswordValid(false)
        } else{
          setIsPasswordValid(true)
        }
        setFormValid(false)
      } else{
          setIsEmailValid(true)
          setIsPasswordValid(true)
          setFormValid(true)
      }
  },[formData]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const registration = () => {
    setRegister(!register);
  };

  const submitLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(formData);
  };

  const handleGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    await signInWithRedirect(firebaseAuth, provider);

    const result = await getRedirectResult(firebaseAuth);
    if (result) {
      const user = result.user;
      console.log(user)
    };
  }


  return (    
    <Login showPassword={showPassword} registration={registration} togglePasswordVisibility={togglePasswordVisibility} submitLogin={submitLogin} handleGoogle={handleGoogle} handleInputChange={handleInputChange} formData={formData} setFormData={setFormData} register={register} setRegister={setRegister} formValid={formValid} isEmailValid={isEmailValid} isPasswordValid={isPasswordValid} />
  );
};

export default AuthForm;
