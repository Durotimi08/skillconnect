"use client";
import Image from "next/image";
import woman from "../home/woman.jpg"
import like from "../../public/assets/icons/icons8-love-24.png"
import liked from "../../public/assets/icons/icons8-love-50.png"
import comment from "../../public/assets/icons/icons8-comment-50.png"
import commented from "../../public/assets/icons/icons8-comment-50 (1).png"
import share from "../../public/assets/icons/icons8-share-30.png"
import back from "../../public/assets/icons/icons8-arrow-30.png"
import EachPost from "./eachpost";
import { useState } from "react";

const Post = () => {
  const [modal, setModal] = useState<boolean>(false)
  const handlechange = () =>{
    setModal(true)
  }
  const handlechange2 = () =>{
    setModal(false)
  }
  return (
    <>
    <article className="h-full w-full relative">
        <section className="border-t-[1px] border-neutral-500 overflow-y-scroll postSc absolute top-0 bottom- left-0 right-0">
            <div className="w-full flex flex-col">
                <article className="border-x-[1px] border-neutral-500 p-4 pb-6">
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
                        <button className="py-1 px-3 bg-neutral-300 text-sm font-adamina text-ctertiary rounded-3xl">Following</button>
                    </div>

                    <article className="ml-16 mt-2 flex flex-col gap-1 cursor-default" onClick={handlechange}>
                        <span className="text-xs font-inter text-neutral-200 cursor-default">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate ullam repellendus repellat dolores? Hic excepturi amet eligendi? Eaque, ipsum quidem aliquam voluptas voluptates culpa adipisci id enim neque maiores.
                        </span>
                    </article>
                </article>
                <article className="border-neutral-500 border-[1px] flex justify-around items-center h-10">
                    <button className="flex gap-2 items-center text-sm font-adamina text-neutral-300">
                        <Image
                                src={liked}
                                width={50}
                                height={50}
                                alt='skillconnect'
                                className='w-5 rounded-[50%]' 
                            />
                        Like
                    </button>
                    <button className="flex gap-2 items-center text-sm font-adamina text-neutral-300">
                        <Image
                                src={commented}
                                width={50}
                                height={50}
                                alt='skillconnect'
                                className='w-5 rounded-[50%]' 
                            />
                        Comment
                    </button>
                    <button className="flex gap-2 items-center text-sm font-adamina text-neutral-300">
                        <Image
                                src={share}
                                width={50}
                                height={50}
                                alt='skillconnect'
                                className='w-5 rounded-[50%]' 
                            />
                        Share
                    </button>
                </article>
            </div>
        </section>
        <section className="h-14 bg-white absolute bottom-0 left-0 right-0"></section>
    </article>
    {modal ? (
            <section className="absolute bottom-0 left-0 right-0 top-0 bg-ctertiary rounded-xl">
                <div className="w-full h-full rounded-xl bg-neutral-300 bg-opacity-20 flex pb-2 pt-2 px-[1px] relative">
                    <div className="absolute left-[50%] -translate-x-1/2 -top-4 w-12 h-12 rounded-[50%] bg-ctertiary cursor-pointer grid place-items-center" onClick={handlechange2}>
                        <Image
                            src={back}
                            width={50}
                            height={50}
                            alt='skillconnect'
                            className='w-5' 
                            />
                    </div>
                    <EachPost />
                </div>
            </section>
    ) : ""}
    </>
  )
}

export default Post