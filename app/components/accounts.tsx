import Image from "next/image"
import woman from "../home/woman.jpg"
const Accounts = () => {
  return (
    <section className="h-full w-full flex flex-col gap-5 mt-8 pl-3 max-h-[250px] bg-neutral-300 bg-opacity-20 rounded-xl p-2 py-4">
        <article className="pr-1">
            <h1 className="text-neutral-200 font-manrope text-xl mb-2">Connect with others</h1>
            <p className="w-full bg-neutral-300 h-[1px]"></p>
        </article>
        <article className="w-full h-full relative">
            <div className="py-2 w-full absolute overflow-y-scroll flex flex-col gap-3 top-0 right-0 bottom-0 pr-2">
                <div className="w-full bg-black rounded-xl py-2 px-4 flex gap-3 items-center">
                    <div className="w-15">
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
                </div>
                <div className="w-full bg-black rounded-xl py-2 px-4 flex gap-3 items-center">
                    <div className="w-15">
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
                </div>
                <div className="w-full bg-black rounded-xl py-2 px-4 flex gap-3 items-center">
                    <div className="w-15">
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
                </div>
            </div>
        </article>
    </section>
  )
}

export default Accounts