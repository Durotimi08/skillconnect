"use client";
import woman from "./home/woman.jpg"
import searchI from "../public/assets/icons/searche.png"
import Image from "next/image"
import { useRef, useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false)
    const modalRef = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        if (modalRef.current) {
        modalRef.current.showModal();
        }
    };
    const handleNav = () =>{
        setNav(true)
      }
    const handleNavclose = () =>{
        setNav(false)
      }
  return (
    <div className="navbar">
        <div className="flex w-72 bg-neutral-300 bg-opacity-20 h-full rounded-md justify-center font-bowlbyrope mr-auto">
            <a className="px-4 flex text-xl">Skill<span className="text-cprimary">Connect</span></a>
        </div>
        <div className="flex-none gap-2">
            <div className="form-control relative">
                <input type="text" placeholder="Search" onFocus={handleNav} className="h-12 outline-none bg-neutral-300 bg-opacity-20 rounded-xl p-4 text-white font-manrope text-sm input-bordered w-[250px] border-[1px]" />
                {nav ? (
                        <section className="absolute top-16 -left-5 -right-14 search bg-ctertiary rounded-box">
                            <article className="relative w-full h-full bg-opacity-20 bg-neutral-300 rounded-box flex flex-col items-center justify-center">
                                <button className="bg-opacity-20 bg-neutral-300 w-12 h-12 rounded-[50%] absolute top-3 right-3 p-2" onClick={handleNavclose}>
                                    <div className="w-full h-full relative">
                                        <div className="absolute w-full bg-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 h-[4px] rotate-45"></div>
                                        <div className="absolute w-full bg-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 h-[4px] -rotate-45"></div>
                                    </div>
                                </button>
                                <article className="flex flex-col-reverse items-center px-4 gap-5">
                                    <h1 className="text-white searp">Searching...</h1>
                                    <div className="">
                                        <Image
                                        src={searchI}
                                        width={400}
                                        height={400}
                                        alt='skillconnect'
                                        className='w-52' 
                                        priority
                                        />
                                    </div>
                                </article>
                            </article>
                        </section>
                ) : ""}
            </div>
            <div className="">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full" onClick={openModal}>
                    <Image
                    src={woman}
                    width={50}
                    height={50}
                    alt='skillconnect'
                    className='' 
                    />
                    </div>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle w-full p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center" ref={modalRef}>
                        <div className="w-full max-w-[1100px] bg-cprimary rounded-xl h-36">
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar