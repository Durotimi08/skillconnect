"use client";
import Image from "next/image"
import Navbar from "../navbar"
import Main from "../main"
import Sidebar from "../sidebar"
import write from "../../public/assets/icons/icons8-write-24.png"
import plus from "../../public/assets/icons/icons8-plus-24.png"
import search from "../../public/assets/icons/icons8-search-30.png"
import messa from "../../public/assets/icons/icons8-up-32.png"
import woman from "../home/woman.jpg"

const dashboard = () => {
  return (
    <main className="w-full h-[100vh] flex flex-col bg-ctertiary overflow-hidden">
        <Navbar />
        <section className="h-full flex pl-2 pb-2">
            <div className="w-72 h-full bg-neutral-300 bg-opacity-20 rounded-md max-h-full pt-10">
                <ul className="w-72 rounded-none h-full">
                    <li className="bg-transparent mb-8 flex flex-row">
                        <button className="w-32 h-12 bg-cprimary rounded-r-md hover:bg-cprimary flex items-center gap-2 justify-center font-inter mr-auto focus-visible:bg-cprimary">
                            <Image
                            src={write}
                            width={20}
                            height={50}
                            alt='skillconnect'
                            className='-rotate-[10deg]' 
                            />
                            Compose
                        </button>
                        <button className="grid place-items-center py-2 hover:bg-ctertiary mr-3 px-4 rounded-md">
                        <Image
                            src={plus}
                            width={120}
                            height={120}
                            alt='skillconnect'
                            className="w-5 h-auto"
                            />
                        </button>
                    </li>
                    <li className="mb-10">
                        <section className="w-full pl-5">
                            <span className="text-white">Messages</span>
                            <div className="w-full pl-3 pr-5 pt-3 relative">
                                <Image
                                src={search}
                                width={120}
                                height={120}
                                alt='skillconnect'
                                className="w-8 h-8 bg-ctertiary p-2 absolute top-4 right-6 rounded-[50%] cursor-pointer"
                                />
                                <input type="text" placeholder="Search" className="h-10 outline-none bg-neutral-300 bg-opacity-60 rounded-3xl mb-3 p-4 pr-10 text-white font-manrope text-sm input-bordered w-full border-[1px] placeholder-white" />
                                <div className="w-full p-3 gap-2 flex flex-col h-52 rounded-md bg-neutral-300 bg-opacity-10 overflow-y-scroll">
                                    <div className="">
                                        <article className="grid messgrid gap-[6px]">
                                            <div className="aspect-square rounded-[50%] p-[0.5px] border-[1px] border-cprimary">
                                                <Image
                                                    src={woman}
                                                    width={50}
                                                    height={50}
                                                    alt='skillconnect'
                                                    className='w-15 rounded-[50%]' 
                                                />
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="absolute left-3 right-5 bottom-0 bg-black flex items-center px-4 rounded-t-2xl h-10 rounded-b-md cursor-pointer">
                                    <span className="font-manrope text-md text-white mr-auto">Messages</span>
                                    <Image
                                        src={messa}
                                        width={50}
                                        height={50}
                                        alt='skillconnect'
                                        className='w-5' 
                                    />
                                </div>
                            </div>
                        </section>
                    </li>
                    <li>
                        <details className="w-full pl-1 list-none" open>
                            <summary className="w-full text-white h-6 cursor-pointer">Courses</summary>
                            <ul className="w-full pl-9 pt-3">
                                <li className="w-full pr-8">
                                    <a className="bg-csecondary py-1 px-3 rounded-md text-white w-full flex font-inter items-center">Data science
                                        <span className="ml-auto mr-1 badge badge-xs badge-success flex items-center"></span>
                                    </a>
                                </li>
                                <li className="w-full pr-8"><button className="bg-ctertiary justify-center py-2 px-3 rounded-md text-white w-full flex mt-3 text-sm">Join a course</button></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <Main />
            <Sidebar />
        </section>
    </main>
  )
}

export default dashboard