import Image from 'next/image'
import globe from "../public/assets/icons/globe_1x-removebg-preview.png"
import pencil from "../public/assets/icons/pencil.png"
import personal from "../public/assets/icons/people3.png"

export default function Home() {
  return (
   <main className='w-full h-full flex flex-col'>
    <section className='bg-csecondary grid place-items-center p-12 pb-4'>
      <header className='bg-ctertiary border-white border-8 px-4 py-10 grid place-items-center gap-12 w-full max-w-[1000px]'>
        <span className='font-bowlbyrope text-white text-6xl w-auto'>SkillConnect</span>
        <span className='font-manrope text-white text-xl w-auto'>Master any craft with skillconnect</span>
      </header>
      <section className='flex p-1 pl-4 mt-8 gap-3 w-full max-w-[700px] items-center'>
        <input type="text" placeholder='Explore our skill libary' className='h-11 w-full rounded-md text-black bg-white outline-none placeholder-black px-4 font-inter text-sm'/>
        <button className='h-10 bg-cprimary grid place-items-center px-4 rounded-md font-inter text-black text-sm'>Search</button>
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
    <section className='bg-cprimary max-w-full p-9 grid place-items-center'>
      <article className='w-[1000px] grid place-items-center max-w-full'>
        <h1 className='font-bowlbyrope text-4xl text-ctertiary mt-4'>
          Embrace the revolution
        </h1>
        <section className='mt-5 flex items-center'>
          <article className='w-full'>
            <p className='mt-4 p-4 bg-white rounded-xl text-sm shadow-md shadow-ctertiary'>Eager to learn how to bake French baguettes or fix a leaky faucet? Maybe you’ve been wondering how to meditate or play the guitar? Well, get ready to strike a pose, strum away, or whip up a cordon bleu dinner! SkillConnect is the answer.</p>
            <p className='mt-4 p-4 bg-white rounded-xl text-sm shadow-md shadow-ctertiary'>Tap into the collective intelligence of your community — swap, blend, mix, and learn! You’re about to become one ridiculously versatile human being.</p>
            <p className='mt-4 p-4 bg-white rounded-xl text-sm shadow-md shadow-ctertiary'>Our easy-to-use platform is intuitively designed, providing visual feedback at every step. Plus, with options for user preferences, you can rest easy knowing you’re in good hands.</p>
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
      <article className='w-[1000px] grid place-items-center max-w-full mt-[100px]'>
        <header className='w-auto max-w-[500px] text-center flex flex-col gap-6 items-center'>
          <Image
            src={pencil}
            width={30}
            height={10}
            className="rotate-[10deg]"
            alt='skillconnect'
            />
          <span className='font-bowlbyrope text-black text-4xl'>Why Wait? Get Started Now!</span>
        </header>
        <div className='max-w-[450px] w-full mt-6 grid place-items-center text-center'>
          <span className='font-manrope text-black text-sm'>Become the Renaissance person you’re meant to be. Dive right into the sea of skills and knowledge. SkillConnect is more than a platform, it’s a journey, and it begins with a simple click.</span>
          <button className='bg-ctertiary px-8 py-2 font-inter text-white text-lg rounded-lg mt-6'>Get Started</button>
        </div>
      </article>
      <article className='w-[1000px] flex gap-8 max-w-full mt-[130px] h-[340px] bg-white rounded-xl relative'>
        <section className='absolute -left-[40px] -top-[40px] bg-csecondary rounded-xl grid place-items-center px-5 w-[380px] shadow-md shadow-csecondary'>
          <Image
            src={personal}
            width={340}
            height={300}
            className="rotate-[10deg]"
            alt='skillconnect'
            />
        </section>
        <section className='bg-white rounded-xl h-auto px-5 w-[480px]'></section>
        <section className='w-full h-auto bg-white rounded-xl p-8 pl-28 flex flex-col'>
          <span className="text-csecondary font-adamina text-4xl leading-tight">Personalized Skill-Matching Algorithm.</span>
          <span className='flex gap-3 mt-9'><svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.981 13.7v3.287a2.997 2.997 0 01-2.997 2.997H5.998A2.997 2.997 0 013 16.986v-9.99A2.997 2.997 0 015.997 4h4.995m5.25 2.059l2.737 2.757"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.99 15.358l-1.489.29a.999.999 0 01-.49 0 1.119 1.119 0 01-.42-.25 1 1 0 01-.249-.41.909.909 0 010-.489l.28-1.508c.085-.38.28-.728.56-1l7.362-7.362a1.85 1.85 0 01.649-.44c.247-.116.516-.18.79-.189.264.002.525.056.768.16.247.1.471.25.66.44a2 2 0 01.44.649 2.082 2.082 0 010 1.548 1.998 1.998 0 01-.44.65l-7.423 7.352c-.27.28-.618.474-.999.56z"></path></svg><span className='font-adamina text-md'>Large skill libary</span></span>
          <span className='flex gap-3 mt-6'><svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 19l.3-.3c2.8-2.8 2.8-7.2 0-10C12.5 6 8 6 5.3 8.8L5 9l10 10z"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 11.5l3.3-3.3c.4-.4.4-1 0-1.4l-3.1-3.1c-.4-.4-1-.4-1.4 0L12.5 7M10 14l-7 7"></path></svg><span className='font-adamina text-md'>Passion driven community</span></span>
          <span className='flex gap-3 mt-6'><svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.015 16.114l-7.039 4.578a1.908 1.908 0 01-2.079 0l-7.039-4.578A1.908 1.908 0 013 14.512V4.907A1.907 1.907 0 014.907 3h14.059a1.908 1.908 0 011.907 1.907v9.605a1.908 1.908 0 01-.858 1.602z" clip-rule="evenodd"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.939 5.33l1.392 3.596 3.854.21-2.995 2.441.992 3.73-3.243-2.1-3.243 2.1 1.002-3.73-3.005-2.442 3.863-.21 1.383-3.595z" clip-rule="evenodd"></path></svg><span className='font-adamina text-md'>Secure User Authentication</span></span>
        </section>
      </article>
      <article className='w-[1100px] max-w-full mt-[130px] gap-10'>
        <h1 className='font-adamina text-black text-4xl p-4 text-center'>Browse skills by category</h1>
        <div className="w-full h-[2px] bg-black mb-10"></div>
        <section className=' gap-8 w-full skills'>
          <div className='bg-neutral-300 bg-opacity-40 rounded-xl p-6 h-fit'>
            <span></span>
            <span className='flex items-center gap-3'><svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path fill="#09bc8a" fill-rule="evenodd" vector-effect="non-scaling-stroke" stroke="#09bc8a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.142 3.813l1.782 4.802 4.927.275c.243.013.477.104.672.26.194.156.338.37.415.615.077.245.082.508.015.756a1.288 1.288 0 01-.391.633L16.726 14.4l1.282 4.993c.06.252.047.517-.038.76a1.285 1.285 0 01-.437.606c-.2.15-.439.234-.684.24a1.174 1.174 0 01-.693-.21L12 17.976 7.854 20.77a1.175 1.175 0 01-.69.214 1.178 1.178 0 01-.684-.233 1.283 1.283 0 01-.441-.599 1.36 1.36 0 01-.047-.757l1.272-4.972-3.826-3.268a1.288 1.288 0 01-.391-.633 1.349 1.349 0 01.015-.756 1.28 1.28 0 01.415-.615c.195-.156.429-.247.672-.26l4.927-.275 1.782-4.802c.092-.24.25-.446.454-.59a1.177 1.177 0 011.376-.001c.204.145.361.35.454.59z" clip-rule="evenodd"></path></svg><span>10k</span></span>
          </div>
        </section>
      </article>
      <article></article>
      <article></article>
    </section>
   </main>
  )
}
