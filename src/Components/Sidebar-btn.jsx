import React from "react"

function SidebarBtn({ icon, title }) {
    return (
        <div className="btn-sideBar hover:bg-[#4A82F6]">
            <div className="icon-sideBar">{icon}</div>
            <div className="title-sideBar">{title}</div>
        </div>
    )
}

export default SidebarBtn
