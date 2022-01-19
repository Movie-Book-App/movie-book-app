import React from "react"
import { MdOutlineDashboard } from "react-icons/md"
import { BsBookmarkPlus, BsBookmarkStar, BsBook } from "react-icons/bs"
import { FiSettings, FiLogIn, FiLogOut, FiTv } from "react-icons/fi"
import { FaUserFriends } from "react-icons/fa"
import { BiCameraMovie } from "react-icons/bi"
import { SiDcentertainment } from "react-icons/si"
import { useState } from "react"
import { GoCalendar } from "react-icons/go"
import SidebarBtn from "./Sidebar-btn"
import { useAppData } from "../Context/DataStorage";
import { Link, useParams } from "react-router-dom";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false)
    const { userObj, dispatchUserObj } = useAppData();

    let subMenu
    subMenu = userObj.subMenu
    // test.toLowerCase()
    console.log(subMenu);

    function handleOpen() {
        if (!isOpen) {
            return (
                <div
                    className="btn-sideBar hover:bg-[#4A82F6] cursor-pointer"
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
                    className=" btn-sideBar hover:bg-[#4A82F6] cursor-pointer"
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
            <div className="btn-mediaType">
                <nav>
                    <Link to="Books/Main" >
                        <SidebarBtn icon={<BsBook />} title="Books" type="media" onButton={() => dispatchUserObj({ type: "change media type", medium: "Books" })} />
                    </Link>
                    <Link to="Movies/Main" >
                        <SidebarBtn icon={<BiCameraMovie />} title="Movies" type="media" onButton={() => dispatchUserObj({ type: "change media type", medium: "Movies" })} />
                    </Link>
                    <Link to="TV-Shows/Main" >
                        <SidebarBtn icon={<FiTv />} title="TV-Shows" type="media" onButton={() => dispatchUserObj({ type: "change media type", medium: "TV-Shows" })} />
                    </Link>
                    <Link to="Comics/Main" >
                        <SidebarBtn icon={<SiDcentertainment />} title="Comics" type="media" onButton={() => dispatchUserObj({ type: "change media type", medium: "Comics" })} />
                    </Link>
                </nav>
            </div>
            <div className="btn-top">
                <nav>
                    <Link to="Books/Main" >
                        <SidebarBtn icon={<MdOutlineDashboard />} title="Dashboard" type="subMenu" onButton={() => dispatchUserObj({ type: "change sub menu", medium: "Dashboard" })} />
                    </Link>
                    <Link to="Books/Collection" >
                        <SidebarBtn icon={<BsBookmarkPlus />} title="My Collection" type="subMenu" onButton={() => dispatchUserObj({ type: "change sub menu", medium: "My Collection" })} />
                    </Link>
                    <Link to="Books/Favorites" >
                        <SidebarBtn icon={<BsBookmarkStar />} title="Favorites" type="subMenu" onButton={() => dispatchUserObj({ type: "change sub menu", medium: "Favorites" })} />
                    </Link>
                    {/* <SidebarBtn icon={<GoCalendar />} title="Coming Soon" type="subMenu" onButton={() => dispatchUserObj({ type: "change sub menu", medium: "Coming Soon" })} />
                    <SidebarBtn icon={<FaUserFriends />} title="Friends" type="subMenu" onButton={() => dispatchUserObj({ type: "change sub menu", medium: "Friends" })} /> */}
                </nav>
            </div>
            <div className="btn-bottom">
                {/* <SidebarBtn icon={<FiSettings />} title="Settings" type="subMenu" onButton={() => dispatchUserObj({ type: "change sub menu", medium: "Settings" })} /> */}
                {handleOpen()}
            </div>
        </div>
    )
}

export default SideBar
