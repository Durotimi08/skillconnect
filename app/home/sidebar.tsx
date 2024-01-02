"use client";
import Image from "next/image"
import Calender from "../components/calender"
import Accounts from "../components/accounts"
import Pending from "../components/pendingAssignments"
import { useState } from "react"
import Notification from "../components/notification";

const Sidebar = () => {
  const [showcalen, setShowcalen] = useState<boolean>(true)
  const [shownoti, setShownoti] = useState<boolean>(false)
  const [showsettin, setShowsettin] = useState<boolean>(false)
  const options = [
    {name: "/assets/icons/icons8-calendar-24.png", callback: ()=>{
      setShowcalen(p => !p)
    }},
    {name: "/assets/icons/icons8-bell-24.png", callback: ()=>{
      setShownoti(p => !p)
    }},
    {name: "/assets/icons/icons8-settings-50.png", callback: ()=>{
      setShowsettin(p => !p)
    }}
  ]
  return (
    <main className="w-[700px] h-full p-2 flex flex-col gap-3 overflow-scroll mt-3">
      <article className="w-full flex justify-end gap-4 px-2">
        {options.map(({name, callback})=>(
          <div key={name} className='bg-opacity-20 p-2 w-14 h-14 justify-center flex items-center rounded-[50%] bg-neutral-300 hover:bg-csecondary transition-all cursor-pointer' onClick={()=>{callback()}}>
          <Image
            src={name}
            width={500}
            height={500}
            alt='skillconnect'
            className='w-6' 
            />
          </div>
        ))}
      </article>
      {shownoti && <Notification />}
      {showcalen && <Calender />}
      <Pending />   
      <Accounts />
    </main>
  )
}

export default Sidebar