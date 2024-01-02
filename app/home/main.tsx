import Image from "next/image"
import Feed from "../components/feed"
import { useState } from "react"
import Spaces from "../components/spaces"

const Main = ({data}: any) => {
    const [choice, setChoice] = useState("feed")
    return (
        <main className="w-full h-full ml-10 mr-10 relative">
            <section className="w-full max-w-[600px] absolute -top-[55px] left-[50%] -translate-x-1/2 flex flex-col gap-2 main_feed">
                <ul className="bg-neutral-300 bg-opacity-20 flex rounded-box justify-around py-1 px-4">
                    <li className="cursor-pointer hover:bg-ctertiary px-4 py-2 rounded-box" onClick={()=>{setChoice("feed")}}>
                        <a className="flex items-center text-white">
                        <Image
                        src={choice === "feed" ? "/assets/icons/icons8-home-48.png" : "/assets/icons/icons8-home-48 (1).png"}
                        width={20}
                        height={20}
                        className="w-5 h-5 mr-2 mb-[1px]"
                        alt='skillconnect'
                        />
                        Feed
                        <span className="ml-1 badge badge-sm badge-warning flex items-center pt-1">NEW</span>
                        </a>
                    </li>
                    <li className="cursor-pointer hover:bg-ctertiary px-4 py-2 rounded-box" onClick={()=>{setChoice("spaces")}}>
                        <a className="flex items-center text-white">
                        <Image
                        src={choice === "feed" ? "/assets/icons/icons8-mike-50.png" : "/assets/icons/icons8-microphone-50.png"}
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
            {choice === "feed" ? <Feed data={data}/> : <Spaces />}
            </section>
        </main>
    )
}

export default Main