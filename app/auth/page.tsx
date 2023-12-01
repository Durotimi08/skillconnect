import Image from 'next/image'
import { useState } from 'react'
import globe from "C:/Users/toshiba/Documents/coding/work/skillconnect/public/assets/icons/businesswoman-giving-presentation.png"
import google from "C:/Users/toshiba/Documents/coding/work/skillconnect/public/assets/icons/icons8-google-48.png"
import facebook from "C:/Users/toshiba/Documents/coding/work/skillconnect/public/assets/icons/download.png"
import github from "C:/Users/toshiba/Documents/coding/work/skillconnect/public/assets/icons/download (1).png"

const auth = () => {
  const [data, setData] = useState<
  Array<{
    email: string;
    password: any;
  }>
  >([])
  function setFormdata(event : Event){
    setData({...data, event.target.name : event.target.value})
  }
  return (
    <main className='w-full min-h-[100vh] bg-cprimary relative'>
        <section className='w-full flex'>
            <header className='w-full font-adamina text-5xl text-black ml-20 mt-10 leading-[55px] cursor-default'>Connect with others like you and engage in life-changing events.</header>
            <div className='w-[600px] h-[400px] grid place-items-end bg-black overflow-hidden rounded-bl-3xl'>
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
          <article className='px-12 bg-white flex-col py-10 w-full flex items-center justify-center rounded-xl'>
            <header className='font-adamina text-black text-4xl cursor-default'>Login</header>
            <input type="text" className='rounded-[40px] w-full max-w-[600px] h-12 border-csecondary border-2 outline-cprimary px-4 placeholder-ctertiary text-black mt-12' placeholder='Username' />
            <input type="password" className='rounded-[40px] w-full max-w-[600px] h-12 border-csecondary border-2 outline-cprimary px-4  placeholder-ctertiary text-black mt-8' placeholder='Password' />
            <button className='w-full max-w-[350px] h-12 bg-cprimary rounded-[40px] text-center mt-14 font-manrope text-white text-lg'>Continue</button>
          </article>
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
  )
}

export default auth