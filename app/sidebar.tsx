"use client";
import Image from "next/image"
import Calender from "./components/calender"
import Accounts from "./components/accounts"
import Pending from "./components/pendingAssignments"
import calen from "../public/assets/icons/icons8-calendar-24.png"
import noti from "../public/assets/icons/icons8-bell-24.png"
import { useState } from "react"

const Sidebar = () => {
  const [showcalen, setShowcalen] = useState<boolean>(false)
  const handlechange = () => {
    setShowcalen((prev)=> (!prev))
  }
  return (
    <main className="w-[700px] h-full p-2 flex flex-col gap-3 overflow-scroll">
      <article className="w-full flex justify-end gap-3 px-2">
        <div className='bg-opacity-20 p-4 rounded-[50%] bg-neutral-300 hover:bg-cprimary transition-all cursor-pointer' onClick={handlechange}>
        <Image
          src={calen}
          width={50}
          height={50}
          alt='skillconnect'
          className='w-5' 
          />
        </div>
        <div className='bg-opacity-20 p-4 rounded-[50%] bg-neutral-300 hover:bg-cprimary transition-all cursor-pointer'>
        <Image
          src={noti}
          width={50}
          height={50}
          alt='skillconnect'
          className='w-5' 
          />
        </div>
        <div className='bg-opacity-20 p-4 rounded-[50%] bg-neutral-300 hover:bg-cprimary transition-all cursor-pointer'>
        <Image
          src={noti}
          width={50}
          height={50}
          alt='skillconnect'
          className='w-5' 
          />
        </div>
      </article>
      <div className="collapse collapse-arrow border bg-cprimary overflow-visible">
        <div className="collapse-title text-xl font-normal">
            Notifications
        </div>
        <div className="collapse-content"> 
            <p>Welcome to skill connect by ski</p>
        </div>
    </div>
      {showcalen ? (<Calender />) : ""}
      <Pending />   
      <Accounts />
    </main>
  )
}

export default Sidebar