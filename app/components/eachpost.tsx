"use client";
import Image from "next/image";
import imag from "../../public/assets/icons/icons8-image-48.png"
import send from "../../public/assets/icons/icons8-send-30.png"
import woman from "../home/woman.jpg"
import like from "../../public/assets/icons/icons8-love-24.png"
import liked from "../../public/assets/icons/icons8-love-50.png"
import comment from "../../public/assets/icons/icons8-comment-50.png"
import commented from "../../public/assets/icons/icons8-comment-50 (1).png"
import share from "../../public/assets/icons/icons8-share-30.png"
import Post from "./post";

const EachPost = () => {
  return (
    <section className="w-full flex flex-col overflow-y-scroll postSc">
        <div className="w-full flex flex-col">
        <article className="p-4 pb-6">
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

            <article className="ml-16 mt-2 flex flex-col gap-1 cursor-default">
                <span className="text-xs font-inter text-neutral-200 cursor-default">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate ullam repellendus repellat dolores? Hic excepturi amet eligendi? Eaque, ipsum quidem aliquam voluptas voluptates culpa adipisci id enim neque maiores.
                </span>
            </article>
        </article>
        <article className="border-neutral-500 border-[1px] border-b-0 flex justify-around items-center h-10">
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
        <Post />
        <section className="h-14 w-full flex gap-3 items-center px-4 pt-2 border-t-[1px] border-neutral-500">
            <input type="text" className="w-full h-10 rounded-lg outline-none border-[1px] border-ctertiary bg-transparent px-3 text-white" placeholder="Enter a comment" />
            <Image
                src={imag}
                width={20}
                height={20}
                className="w-10 h-10 p-1 hover:bg-ctertiary rounded-[50%] cursor-pointer transition-all"
                alt='skillconnect'
            />
            <Image
                src={send}
                width={20}
                height={20}
                className="w-8 h-8 hover:h-9 hover:w-9 p-1 hover:bg-ctertiary rounded-[50%] cursor-pointer transition-all"
                alt='skillconnect'
            />
        </section>
    </section>
  )
}

export default EachPost