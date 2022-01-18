import React from "react"
import { MdOutlineDashboard } from "react-icons/md"
import { BsBookmarkPlus } from "react-icons/bs"
import { BsBookmarkStar } from "react-icons/bs"
import { FaUserFriends } from "react-icons/fa"
import { FiSettings } from "react-icons/fi"
import { FiLogIn } from "react-icons/fi"
import { FiLogOut } from "react-icons/fi"
import { useState } from "react"
import { GoCalendar } from "react-icons/go"
import SidebarBtn from "./Sidebar-btn"
import FetchMovie from "./FetchMovie"
function SideBar() {
    const [isOpen, setIsOpen] = useState(false)

    function handleOpen() {
        if (!isOpen) {
            return (
                <div
                    className="btn-sideBar hover:bg-[#4A82F6]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="icon-sideBar">
                        <FiLogIn />
                    </div>
                    <div className="title-sideBar">Log In</div>
                </div>
            )
        } else {
            return (
                <div
                    className=" btn-sideBar hover:bg-[#4A82F6]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="icon-sideBar">
                        <FiLogOut />
                    </div>
                    <div className="title-sideBar">Log Out</div>
                </div>
            )
        }
    }
    return (
        <div className="w-[212px] bg-[white] flex flex-col justify-between rounded-l-[35px] border-r-2 mr-[29px] h-full">
            <div className="mt-[41px] ml-[37px] mb-[57px] text-[28px]">
                LOGO
            </div>
            <div className="btn-top">
                <SidebarBtn icon={<MdOutlineDashboard />} title="Dashboard" />
                <SidebarBtn icon={<BsBookmarkPlus />} title="My Collection" />
                <SidebarBtn icon={<BsBookmarkStar />} title="Favorites" />
                <SidebarBtn icon={<GoCalendar />} title="Comming Soon" />
                <SidebarBtn icon={<FaUserFriends />} title="Friends" />
            </div>
            <div className="btn-bottom">
                <SidebarBtn icon={<FiSettings />} title="Settings" />
                {handleOpen()}
            </div>
        </div>
    )
}

export default SideBar
