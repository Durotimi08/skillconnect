import Image from "next/image"
import world from "../public/assets/icons/icons8-world-24.png"
import imag from "../public/assets/icons/icons8-image-48.png"
import poll from "../public/assets/icons/icons8-poll-48.png"
import home from "../public/assets/icons/icons8-home-48.png"
import home_fill from "../public/assets/icons/icons8-home-48 (1).png"
import mike from "../public/assets/icons/icons8-mike-50.png"
import woman from "../app/home/woman.jpg"
import Post from "./components/post"

const Main = () => {
  return (
    <main className="w-full h-full ml-10 mr-10 relative">
        <section className="w-full max-w-[600px] absolute -top-[55px] left-[50%] -translate-x-1/2 flex flex-col gap-2 main_feed">
            <ul className="bg-neutral-300 bg-opacity-20 flex rounded-box justify-around py-1 px-4">
                <li className="cursor-pointer hover:bg-ctertiary px-4 py-2 rounded-box">
                    <a className="flex items-center text-white">
                    <Image
                    src={true ? home : home_fill}
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2 mb-[1px]"
                    alt='skillconnect'
                    />
                    Feed
                    <span className="ml-1 badge badge-sm badge-warning flex items-center pt-1">NEW</span>
                    </a>
                </li>
                <li className="cursor-pointer hover:bg-ctertiary px-4 py-2 rounded-box">
                    <a className="flex items-center text-white">
                    <Image
                    src={mike}
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2"
                    alt='skillconnect'
                    />
                    Spaces
                    <span className="ml-1 badge badge-sm flex items-center pt-1">5+</span>
                    </a>
                </li>
            </ul>
            <section className="bg-neutral-300 bg-opacity-20 rounded-xl w-full h-full flex flex-col p-2">
                <article className="w-full h-fit bg-neutral-300 bg-opacity-20 flex rounded-md flex-col mb-6">
                    <article className="w-full h-full pt-4 px-4 pb-1">
                        <div className="flex items-start">
                            <button className="flex items-center mr-auto gap-2">
                                <div className="w-20">
                                    <Image
                                        src={woman}
                                        width={50}
                                        height={50}
                                        alt='skillconnect'
                                        className='w-15 rounded-[50%]' 
                                    />
                                </div>
                                <div className="w-full flex flex-col justify-center items-start">
                                    <span className="text-neutral-200 text-sm">Ibrahim Adekunbi</span>
                                    <span className="text-neutral-200 font-manrope text-[0.75rem]">Data analyst</span>
                                </div>
                            </button>
                        </div>

                        <article className="ml-16 mt-2 flex flex-col gap-1 cursor-default">
                            <textarea className="text-sm font-inter text-neutral-200 resize-none bg-transparent outline-none" placeholder="What is happening...">
                            </textarea>
                        </article>
                    </article>
                    <section className="w-full h-[70px] border-t-[1px] border-neutral-200 flex items-center px-2">
                        <div className="mr-auto flex items-center gap-3">
                            <button className="pl-1 pr-4 py-1 flex gap-4 rounded-3xl bg-cprimary bg-opacity-70">
                                <Image
                                src={world}
                                width={20}
                                height={20}
                                className="w-5 h-5"
                                alt='skillconnect'
                                />
                                <span className="font-inter text-sm text-ctertiary">Drafts</span>
                            </button>
                            <Image
                                src={imag}
                                width={20}
                                height={20}
                                className="w-7 h-7 p-1 hover:bg-ctertiary rounded-[50%] cursor-pointer transition-all"
                                alt='skillconnect'
                            />
                            <Image
                                src={poll}
                                width={20}
                                height={20}
                                className="w-7 h-7 p-1 hover:bg-ctertiary rounded-[50%] cursor-pointer transition-all"
                                alt='skillconnect'
                            />
                        </div>
                        <button className="py-1 px-6 rounded-3xl bg-cprimary text-white font-inter">Post</button>
                    </section>
                </article>
                <Post />
            </section>
        </section>
    </main>
  )
}

export default Main