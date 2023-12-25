import Image from 'next/image';
import globe from "C:/Users/toshiba/Documents/coding/work/skillconnect/public/assets/icons/businesswoman-giving-presentation.png";
import google from "C:/Users/toshiba/Documents/coding/work/skillconnect/public/assets/icons/icons8-google-48.png";
import Hide from "../../public/assets/icons/icons8-closed-eye-24.png"
import Show from "../../public/assets/icons/icons8-eye-30.png"
import Register from './register';

const Login = ({registration, showPassword, togglePasswordVisibility, submitLogin, handleGoogle, handleInputChange, formData, register, setRegister, formValid, isEmailValid, isPasswordValid}:any) => {
  return (
    <main className='w-full min-h-[100vh] bg-cprimary relative'>
      {register && <Register setState={setRegister} state={register} />}
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
              className="absolute top-[38px] right-3 w-auto bg-white p-2 hover:bg-neutral-300 rounded-[50%]"
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
          <button
            type='submit'
            disabled={!formValid}
            onClick={submitLogin}
            className={`w-full max-w-[350px] h-12 ${
              formValid ? 'bg-cprimary' : 'bg-neutral-500 cursor-not-allowed'
            } rounded-[40px] text-center mt-14 font-manrope text-white text-lg`}
          >
            Continue
          </button>
        </section>
        <article className='w-[400px] h-auto flex items-end'>
          <div className='h-[50%] w-full flex flex-col items-center'>
            <button className='w-full max-w-[350px] h-12 bg-black rounded-[40px] text-center font-manrope text-white text-lg mt-5' onClick={registration}>Register</button>
            <p className='my-5 cursor-default'>OR</p>
            <div className="flex justify-around">
              <button className="flex bg-[lightblue] rounded-3xl py-[0.35rem] px-6 gap-4 items-center justify-center" onClick={handleGoogle}>
                <Image
                  src={google}
                  width={30}
                  height={30}
                  alt='google'
                  className='w-30 h-30'
                />
                <span className="text-ctertiary font-inter">Continue with google</span>
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Login