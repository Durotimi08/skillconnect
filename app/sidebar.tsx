"use client";
import Image from "next/image"
import Calender from "./components/calender"
import Accounts from "./components/accounts"
import Pending from "./components/pendingAssignments"
import calen from "../public/assets/icons/icons8-calendar-24.png"
import noti from "../public/assets/icons/icons8-bell-24.png"
import settin from "../public/assets/icons/icons8-settings-50.png"
import { useState } from "react"

const Sidebar = () => {
  const [showcalen, setShowcalen] = useState<boolean>(false)
  const handlechange = () => {
    setShowcalen((prev)=> (!prev))
  }
  const options = [calen, noti, settin]
  return (
    <main className="w-[700px] h-full p-2 flex flex-col gap-3 overflow-scroll">
      <article className="w-full flex justify-end gap-4 px-2">
        {options.map((val)=>(
          <div className='bg-opacity-20 p-2 w-14 h-14 justify-center flex items-center rounded-[50%] bg-neutral-300 hover:bg-csecondary transition-all cursor-pointer'>
          <Image
            src={val}
            width={500}
            height={500}
            alt='skillconnect'
            className='w-6' 
            />
          </div>
        ))}
      </article>
      <div className="bg-csecondary overflow-visible rounded-xl p-3 px-5">
        <div className="text-neutral-400 text-xl font-normal mb-3">
            Notifications
        </div>
        <div className=""> 
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