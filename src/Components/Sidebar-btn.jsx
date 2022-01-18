import React from "react"
import { useAppData } from "../Context/DataStorage";


function SidebarBtn({ icon, title, type, onButton }) {
    const { userObj } = useAppData();
    let bg
    if (type === "media" && title === userObj.mediaType) bg ="bg-[#e8e11c]"
    if (type === "subMenu" && title === userObj.subMenu) bg = "bg-[#1c3be8]"
    let hoverColor
    if (type === "media" && title !== userObj.mediaType) hoverColor = "hover:bg-[#f4ff75]"
    if (type === "subMenu" && title !== userObj.subMenu) hoverColor = "hover:bg-[#4A82F6]"

    return (
        <div className={`btn-sideBar cursor-pointer ${bg} ${hoverColor}`} onClick={() => onButton()}>
            <div className="icon-sideBar">{icon}</div>
            <div className="title-sideBar">{title}</div>
        </div>
    )
}

export default SidebarBtn
