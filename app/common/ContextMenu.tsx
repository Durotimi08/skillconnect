import { useEffect, useRef } from "react";
interface coor {
  x: number;
  y: number
}
interface Props{
  options: any;
  coordinates: coor;
  setContextMenu: (val: boolean) => void;
  hov: (val: boolean) => void;
  contextMenu: boolean
}
function ContextMenu({options, coordinates, setContextMenu, contextMenu, hov}: Props) {
  const contextMenuRef = useRef(null)
  const handleClick = (e: React.MouseEvent, callback:any) => {
    e.stopPropagation();
    setContextMenu(false);
    callback()
  }
  useEffect(()=>{
    const handleOutsideClick = (event: any) => {
      if(event.target.id !== "context-opener"){
        if(contextMenuRef.current && !contextMenuRef.current.contains(event.target)){
          setContextMenu(false)
        }
      }
    }
    document.addEventListener("click", handleOutsideClick)
    return ()=>{
      document.addEventListener("click", handleOutsideClick)
    }
  },[])
  return (
    <article className={`fixed py-2 z-[100] rounded-lg shadow-xl bg-[#233138]`} ref={contextMenuRef} style={{top: coordinates.y, left: coordinates.x }}>
      <ul>
        {options.map(({name, callback} : any)=>(
          <li className="px-4 py-2 cursor-pointer hover:bg-ctertiary" key={name} onClick={(e:React.MouseEvent)=>{handleClick(e, callback)}}>
            <span className="text-neutral-200 text-sm">{name}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ContextMenu;
