import Image from "next/image"
import {FaCamera} from "react-icons/fa"
import React, { useState } from "react";
import ContextMenu from "../common/ContextMenu";
import PhotoPicker from "../common/PhotoPicker";

type Props = {
    type: string;
    image: any;
    setImage: (val: { email: string; password: string; firstname: string; lastname: string; image: any; }) => void;
}
interface coor {
    x: number;
    y: number
}
const Avater = ({ setImage, image, type } : Props) => {
  const [hover, setHover] = useState<boolean>(false)
  const [grabPhoto, setGrabPhoto] = useState<boolean>(false)
  const [isContextMenuVisible, setIsContextMenuVisible] = useState<boolean>(false)
  const [contextMenuCoordinate, setContextMenuCoordinate] = useState<coor>({
    x: 0,
    y: 0
  })
  const showContextMenu = (e: React.MouseEvent) => {
    setContextMenuCoordinate({x: e.pageX, y:e.pageY})
    setIsContextMenuVisible(true)
  }
  const contextMenuOptions = [
    {name: "Take Photo", callback: ()=>{}},
    {name: "Choose From Libary", callback: ()=>{}},
    {name: "Upload Photo", callback: ()=>{
        setGrabPhoto(true)
    }}
  ]

    const photoPickerChange = () => {

    }
  return (
    <>
    <section>
        {type === "sm" && (
        <div className="relative cursor-pointer z-0" onMouseEnter={()=>  setHover(true)} onMouseLeave={()=>  setHover(false)}>
            div.
            <article className="relative w-10 h-10">
                <Image fill alt="avater" className="rounded-full" src={image}/>
            </article>
        </div>
        )}
        {type === "lg" && (
        <div className="relative cursor-pointer z-0" onMouseEnter={()=>  setHover(true)} onMouseLeave={()=>  setHover(false)}>
            <article className="relative w-14 h-14">
                <Image fill alt="avater" className="rounded-full" src={image}/>
            </article>
        </div>
        )}
        {type === "xl" && (
        <div className="relative cursor-pointer z-0 profi" onMouseEnter={()=>  setHover(true)} onMouseLeave={()=>  setHover(false)}>
            <div className={` z-10 absolute top-0 bottom-0 left-0 right-0 flex items-center ${hover ? "visible": "hidden"} transition-all justify-center bg-[rgba(30,42,49,0.8)] rounded-full text-center gap-2 flex-col`} onClick={(e: React.MouseEvent)=>(showContextMenu(e))}>
                <FaCamera id="context-opener" className="text-2xl text-neutral-200"  onClick={(e : React.MouseEvent)=>(showContextMenu(e))} />
                <span className="text-neutral-300 font-inter text-sm" onClick={(e : React.MouseEvent)=>(showContextMenu(e))}>Change profile photo</span>
            </div>
            <article className="relative w-32 h-32 flex items-center justify-center">
                <Image fill alt="avater" className="rounded-full" src={image}/>
            </article>
        </div>
        )}
    </section>
    {grabPhoto && <PhotoPicker onChange={photoPickerChange} />}
    {isContextMenuVisible && (<ContextMenu options={contextMenuOptions} coordinates={contextMenuCoordinate} contextMenu={isContextMenuVisible} setContextMenu={setIsContextMenuVisible} hov={setHover} />)}
    </>
  )
}

export default Avater