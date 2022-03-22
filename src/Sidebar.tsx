import React from "react";
import "./css/Sidebar.css"
interface sidebarProps{
  change: (text:string) => void
  mode: string
}
export function Sidebar(props:sidebarProps){
  const menu = ["Image","Text", "Settings", "About"]
  const menuItems = menu.map(item => (
    <div className={`menuitem${item==props.mode}`} onClick={()=>props.change(item)}>
      {item}
    </div>
  ))
  return (<div className="menu">
    {menuItems}
  </div>)
}