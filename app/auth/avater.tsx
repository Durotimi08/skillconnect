import Image from "next/image"
import {FaCamera} from "react-icons/fa"
import React, { FocusEvent, useState, useEffect, ChangeEvent } from "react";
import ContextMenu from "../common/ContextMenu";
import PhotoPicker from "../common/PhotoPicker";
import PhotoLibrary from "../common/PhotoLibrary";
import CapturePhoto from "../common/CapturePhoto";

type Props = {
    type: string;
    image: any;
    setImage: any;
}

interface coor {
    x: number;
    y: number
}
const Avater = ({ setImage, image, type } : Props) => {
  const [hover, setHover] = useState<boolean>(false)
  const [grabPhoto, setGrabPhoto] = useState<boolean>(false)
  const [showPhotoLibary, setShowPhotoLibary] = useState<boolean>(false)
  const [showCapturePhoto, setShowCapturePhoto] = useState<boolean>(false)
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
    {name: "Take Photo", callback: ()=>{
      setShowCapturePhoto(true)
    }},
    {name: "Choose From Libary", callback: ()=>{
      setShowPhotoLibary(true)
    }},
    {name: "Upload Photo", callback: ()=>{
      setGrabPhoto(true)
    }}
  ]
  useEffect(()=>{
    if(grabPhoto){
      const data = document.getElementById("photo-picker")
      data?.click()
      document.body.onfocus = (e) => {
        setTimeout(()=>{
          setGrabPhoto(false)
        },1000)
      }
    }
  },[grabPhoto])
  const photoPickerChange = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const data = document.createElement("img");
    let dataSrc: string = '';
  
    reader.onload = function (event) {
      dataSrc = event.target?.result as string;
      data.setAttribute("data-src", dataSrc);
      data.setAttribute("src", dataSrc);
    };
  
    reader.readAsDataURL(file);
  
    setTimeout(() => {
      setImage((val: any) => ({ ...val, image: dataSrc }));
    }, 100);
  };
  
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
    {showCapturePhoto && <CapturePhoto  setImage={setImage} hideCapturePhoto={setShowCapturePhoto} />}
    {showPhotoLibary && <PhotoLibrary setImage={setImage} hidePhotoLibary={setShowPhotoLibary} />}
    {grabPhoto && <PhotoPicker onChange={photoPickerChange} />}
    {isContextMenuVisible && (<ContextMenu options={contextMenuOptions} coordinates={contextMenuCoordinate} contextMenu={isContextMenuVisible} setContextMenu={setIsContextMenuVisible} hov={setHover} />)}
    </>
  )
}

export default Avater