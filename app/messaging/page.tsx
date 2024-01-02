"use client";
import { useSession } from "next-auth/react"
import Chatbody from "./chatbody"
import Chatlist from "./chatlist"

const page = () => {
    const { data: user } = useSession()
    console.log(user)
    return (
        <section className="w-[100vw] h-[100vh] bg-ctertiary flex">
            <Chatlist />
            <Chatbody />
        </section>
    )
}

export default page