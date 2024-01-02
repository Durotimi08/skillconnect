"use client";
import defaultAva from "../../public/assets/icons/default_avatar.png"
import React, { useState, useEffect, useCallback } from 'react';
import { z } from 'zod';
import { useSearchParams, useRouter } from 'next/navigation';
import Login from './login';
import { signIn } from "next-auth/react";


const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

interface sign {
  name: string;
  signature: boolean
}

interface formdat {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  skills : sign[];
  image: any
}

const AuthForm = () => {
  const [formdata, setFormdata] = useState<formdat>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    skills: [],
    image: defaultAva
  })
  const [register, setRegister] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  }, [setFormdata]);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, [setShowPassword]);

  const registration = useCallback(() => {
    setRegister((prevRegister) => !prevRegister);
  }, [setRegister]);

  useEffect(() => {
    let word: string | null = searchParams.get("Oauth")
    let goto: string | null = searchParams.get("ref")
    if (word === "a2627vahdaahhaf9y7238fvakd") { setRegister(true) }
    if (goto) {router.push(goto)}
  }, [searchParams]);

  useEffect(() => {
    const result = schema.safeParse({email: formdata.email, password: formdata.password})
    if (!result.success) {
      const formatted = result.error.format()
      setFormValid(false);
      setIsEmailValid(!formatted.email?._errors);
      setIsPasswordValid(!formatted.password?._errors);
    } else {
      setFormValid(true);
      setIsEmailValid(true);
      setIsPasswordValid(true);
    }
  }, [formdata, setIsEmailValid, setIsPasswordValid, setFormValid]);

  const submitLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const status = await signIn("credentials", {
        redirect: false,
        callbackUrl: "http://localhost:3000",
        ...{email: formdata.email, password: formdata.password}
      })

      if (status?.ok) router.push("/home")

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Login
      showPassword={showPassword}
      registration={registration}
      togglePasswordVisibility={togglePasswordVisibility}
      submitLogin={submitLogin}
      handleInputChange={handleInputChange}
      formdata={formdata}
      setFormdata={setFormdata}
      register={register}
      setRegister={setRegister}
      formValid={formValid}
      isEmailValid={isEmailValid}
      isPasswordValid={isPasswordValid}
    />
  );
};

export default AuthForm;
