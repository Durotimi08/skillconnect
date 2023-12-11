import Image from "next/image"
import woman from "../home/woman.jpg"
const Accounts = () => {
  return (
    <section className="h-full w-full flex flex-col gap-5 mt-8 pl-1">
        <article className="pr-1">
            <h1 className="text-neutral-200 font-inter text-xl mb-2">Connect with others</h1>
            <p className="w-full bg-neutral-300 h-[1px]"></p>
        </article>
        <article className="w-full h-full relative">
            <div className="py-2 w-full absolute overflow-y-scroll flex flex-col gap-3 top-0 right-0 bottom-0 pr-2">
                <div className="w-full bg-black rounded-xl py-3 px-4 flex gap-3 items-center">
                    <div className="w-20">
                        <Image
                            src={woman}
                            width={50}
                            height={50}
                            alt='skillconnect'
                            className='w-15 rounded-[50%]' 
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center mr-auto">
                        <span className="text-neutral-200 text-sm">Ibrahim Adekunbi</span>
                        <span className="text-neutral-200 font-inter text-[0.75rem]">Data analyst</span>
                    </div>
                    <span className="font-adamina text-neutral-300 text-sm px-4 flex items-center h-fit py-2 rounded-xl bg-ctertiary hover:bg-cprimary transition-all cursor-pointer">follow</span>
                </div>
                <div className="w-full bg-black rounded-xl py-3 px-4 flex gap-3 items-center">
                    <div className="w-20">
                        <Image
                            src={woman}
                            width={50}
                            height={50}
                            alt='skillconnect'
                            className='w-15 rounded-[50%]' 
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center mr-auto">
                        <span className="text-neutral-200 text-sm">Ibrahim Adekunbi</span>
                        <span className="text-neutral-200 font-inter text-[0.75rem]">Data analyst</span>
                    </div>
                    <span className="font-adamina text-neutral-300 text-sm px-4 flex items-center h-fit py-2 rounded-xl bg-ctertiary hover:bg-cprimary transition-all cursor-pointer">follow</span>
                </div>
                <div className="w-full bg-black rounded-xl py-3 px-4 flex gap-3 items-center">
                    <div className="w-20">
                        <Image
                            src={woman}
                            width={50}
                            height={50}
                            alt='skillconnect'
                            className='w-15 rounded-[50%]' 
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center mr-auto">
                        <span className="text-neutral-200 text-sm">Ibrahim Adekunbi</span>
                        <span className="text-neutral-200 font-inter text-[0.75rem]">Data analyst</span>
                    </div>
                    <span className="font-adamina text-neutral-300 text-sm px-4 flex items-center h-fit py-2 rounded-xl bg-ctertiary hover:bg-cprimary transition-all cursor-pointer">follow</span>
                </div>
            </div>
        </article>
    </section>
  )
}

export default Accounts