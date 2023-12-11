"use client";
import React, { useState, useEffect } from 'react';
import { z, ZodError } from 'zod';
import globe from "C:/Users/toshiba/Documents/coding/work/skillconnect/public/assets/icons/businesswoman-giving-presentation.png";
import google from "C:/Users/toshiba/Documents/coding/work/skillconnect/public/assets/icons/icons8-google-48.png";
import facebook from "C:/Users/toshiba/Documents/coding/work/skillconnect/public/assets/icons/download.png";
import github from "C:/Users/toshiba/Documents/coding/work/skillconnect/public/assets/icons/download (1).png";
import Image from 'next/image';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormInput = z.infer<typeof schema>;
const AuthForm = () => {
  const [formData, setFormData] = useState<FormInput>({
    email: '',
    password: '',
  });
  const [formValid, setFormValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  React.useEffect(() => {
      const result = schema.safeParse(formData)
      if(!result.success){
        const formatted = result.error.format()
        console.log(formatted.email?._errors, formatted.password?._errors)
        if(formatted.email?._errors){
          setIsEmailValid(false)
        }
        if(formatted.password?._errors){
          setIsPasswordValid(false)
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

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(formData);
  };


  return (    
    <main className='w-full min-h-[100vh] bg-cprimary relative'>
      <section className='w-full flex'>
        <header className='w-full font-adamina text-5xl text-csecondary ml-20 mt-10 leading-[55px] cursor-default'>Connect with others like you and engage in life-changing events.</header>
        <div className='w-[700px] h-[400px] grid place-items-end bg-csecondary overflow-hidden rounded-bl-3xl'>
          <Image
            src={globe}
            width={470}
            height={450}
            alt='skillconnect'
            className='max-w-[450px] h-[500px]'
            priority
          />
        </div>
      </section>
      <section className='w-full px-[40px] flex absolute top-52 gap-[40px]'>
        <section className='px-12 bg-white border-[1px] border-csecondary flex-col py-10 w-full flex items-center justify-center rounded-xl'>
          <header className='font-adamina text-black text-4xl cursor-default'>Login</header>
          <input
            type="email"
            className={`rounded-[40px] w-full max-w-[600px] h-12 border ${
              isEmailValid ? 'border-cprimary' : 'border-csecondary'
            } outline-none px-4 placeholder-ctertiary text-black mt-12`}
            placeholder='Email'
            onChange={handleInputChange}
            name="email"
            value={formData.email}
          />
          <div className="relative w-full max-w-[600px]">
            <input
              type={showPassword ? 'text' : 'password'}
              className={`rounded-[40px] w-full h-12 border ${
                isPasswordValid ? 'border-cprimary' : 'border-csecondary'
              } outline-none px-4 placeholder-ctertiary text-black mt-8`}
              placeholder='Password'
              onChange={handleInputChange}
              name="password"
              value={formData.password}
            />
            <button
              className="absolute top-9 right-3 w-auto h-10 bg-white text-center font-inter text-sm"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button
            type='submit'
            disabled={!formValid}
            onClick={onSubmit}
            className={`w-full max-w-[350px] h-12 ${
              formValid ? 'bg-cprimary' : 'bg-neutral-500'
            } rounded-[40px] text-center mt-14 font-manrope text-white text-lg`}
          >
            Continue
          </button>
        </section>
        <article className='w-[400px] h-auto flex items-end'>
          <div className='h-[50%] w-full flex flex-col items-center'>
            <button className='w-full max-w-[350px] h-12 bg-black rounded-[40px] text-center font-manrope text-white text-lg mt-5'>Register</button>
            <p className='my-5 cursor-default'>OR</p>
            <div className="flex justify-around w-[200px]">
              <button>
                <Image
                  src={google}
                  width={50}
                  height={50}
                  alt='google'
                  priority
                />
              </button>
              <button>
                <Image
                  src={facebook}
                  width={50}
                  height={50}
                  alt='facebook'
                  priority
                />
              </button>
              <button>
                <Image
                  src={github}
                  width={50}
                  height={50}
                  alt='github'
                  priority
                />
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default AuthForm;
