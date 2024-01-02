import {IoClose} from "react-icons/io5"
import avater1 from "../../public/assets/icons/avatars/1.png"
import avater2 from "../../public/assets/icons/avatars/2.png"
import avater3 from "../../public/assets/icons/avatars/3.png"
import avater4 from "../../public/assets/icons/avatars/4.png"
import avater5 from "../../public/assets/icons/avatars/5.png"
import avater6 from "../../public/assets/icons/avatars/6.png"
import avater7 from "../../public/assets/icons/avatars/7.png"
import avater8 from "../../public/assets/icons/avatars/8.png"
import avater9 from "../../public/assets/icons/avatars/9.png"
import Image from "next/image"

function PhotoLibrary({ setImage, hidePhotoLibary } : any) {
  const images = [avater1, avater2, avater3, avater4, avater5, avater6, avater7, avater8, avater9]
  return (
    <article className="fixed top-0 left-0 w-full flex justify-center items-center h-full max-h-[100vh] wax-w-[100vw] z-10">
      <section className="h-max w-max bg-ctertiary gap-6 p-4 rounded-lg flex flex-col">
        <div className="w-full justify-end flex">
          <IoClose className="w-10 h-10 cursor-pointer text-neutral-200" onClick={()=>hidePhotoLibary(false)} />
        </div>
        <div className="grid grid-cols-3 justify-center items-center gap-12 p-4">
          {images.map((image)=>(
            <div onClick={()=>{setImage((val: any)=>({...val, image: image})); hidePhotoLibary(false)}} >
              <div className="h-24 w-24 rounded-full relative cursor-pointer">
                <Image src={image} alt="avater" fill/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default PhotoLibrary;
