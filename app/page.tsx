import Image from 'next/image'
import globe from "../public/assets/icons/globe_1x-removebg-preview.png"

export default function Home() {
  return (
   <main className='w-full h-full flex flex-col'>
    <section className='bg-csecondary grid place-items-center p-12 pb-4'>
      <header className='bg-ctertiary border-white border-8 px-4 py-10 grid place-items-center gap-12 w-full max-w-[1000px]'>
        <span className='font-bowlbyrope text-white text-6xl w-auto'>SkillConnect</span>
        <span className='font-manrope text-white text-xl w-auto'>Master any craft with skillconnect</span>
      </header>
      <section className='border-2 border-cprimary flex h-11 p-1 pl-4 mt-8 rounded-3xl w-full max-w-[700px]'>
        <input type="text" placeholder='Engage with other skillmates' className='w-full text-white bg-transparent outline-none placeholder-white font-inter text-sm'/>
        <button className='bg-cprimary grid place-items-center px-4 rounded-3xl font-inter text-white text-lg'>Search</button>
      </section>
      <section className='flex w-full max-w-[850px] mt-14'>
        <button className='w-full max-w-xs h-10 bg-cprimary grid place-items-center rounded-3xl mr-auto'>
          <span className='font-adamina text-white'>Sign in</span>
        </button>
        <button className='w-full max-w-xs h-10 bg-black grid place-items-center rounded-3xl'>
          <span className='font-adamina text-white'>Sign up</span>
        </button>
      </section>
    </section>
    <section className='bg-cprimary w-full p-9 grid place-items-center'>
      <article className='w-full grid place-items-center max-w-[1000px]'>
        <h1 className='font-bowlbyrope text-3xl text-ctertiary mt-4'>
          Embrace the revolution
        </h1>
        <section className='mt-5 flex items-center'>
          <article className='w-full'>
            <p className='mt-4 p-4 bg-white rounded-xl font-manrope text-sm shadow-md shadow-ctertiary'>Eager to learn how to bake French baguettes or fix a leaky faucet? Maybe you’ve been wondering how to meditate or play the guitar? Well, get ready to strike a pose, strum away, or whip up a cordon bleu dinner! SkillConnect is the answer.</p>
            <p className='mt-4 p-4 bg-white rounded-xl font-manrope text-sm shadow-md shadow-ctertiary'>Tap into the collective intelligence of your community — swap, blend, mix, and learn! You’re about to become one ridiculously versatile human being.</p>
            <p className='mt-4 p-4 bg-white rounded-xl font-manrope text-sm shadow-md shadow-ctertiary'>Our easy-to-use platform is intuitively designed, providing visual feedback at every step. Plus, with options for user preferences, you can rest easy knowing you’re in good hands.</p>
          </article>
          <div className='w-[600px] grid place-items-end'>
            <Image
            src={globe}
            width={320}
            height={320}
            alt='skillconnect'
            />
          </div>
        </section>
      </article>
      <article className='w-full grid place-items-center max-w-[1000px] mt-[70px]'>
        <header className='w-auto max-w-[500px] text-center'>
          <span className='font-bowlbyrope text-black text-4xl'>Why Wait? Get Started Now!</span>
        </header>
        <div className='max-w-[450px] w-full mt-8 grid place-items-center text-center'>
          <span className='font-manrope text-black text-sm'>Become the Renaissance person you’re meant to be. Dive right into the sea of skills and knowledge. SkillSwap is more than a platform, it’s a journey, and it begins with a simple click.</span>
          <span className='bg-ctertiary px-8 py-2 font-inter text-white text-lg rounded-lg mt-6'>Get Started</span>
        </div>
      </article>
      <article>

      </article>
      <article></article>
      <article></article>
      <article></article>
    </section>
   </main>
  )
}
