import React from "react"
import { BsSearch, BsBell } from "react-icons/bs"

function Header() {
    const userName = "Andreas Langner"
    const userPicUrl = "https://avatars.githubusercontent.com/u/85481701?v=4"

    return (
        <div className="flex justify-between m-[29px] w-full">
            <div className="flex border-2 rounded-lg text-sm">
                <input
                    type="text"
                    className="px-4 py-2 w-80 focus:outline-none"
                    placeholder="Search..."
                    name="searchBar"
                />
                <button
                    className="flex items-center justify-center px-4"
                    htmlFor="searchBar"
                >
                    <BsSearch className="text-[18px]" />
                </button>
            </div>
            <div className="flex items-center">
                <div className="cursor-pointer mr-[20px]">
                    <BsBell />
                </div>

                <div className="flex items-center">
                    <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer hover:bg-[#4a82f6] transition-all duration-150 delay-100 mx-[6px]">
                        <img
                            className="w-[46px] rounded-full cursor-pointer hover:brightness-75"
                            alt="User"
                            src={userPicUrl}
                        />
                    </div>
                    <div className="mr-[29px] text-[18px] cursor-pointer">
                        {userName}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
