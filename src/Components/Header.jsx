import React, { useState } from "react"
import { BsSearch, BsBell } from "react-icons/bs"
import { useAppData } from "../Context/DataStorage"
import { useNavigate } from "react-router-dom"

function Header() {
    const [searchString, setSearchString] = useState("")
    const { globalSearchString, setGlobalSearchString, userObj } = useAppData()

    const medium = userObj.mediaType

    const changeHandler = (event) => {
        const input = event.target.value
        setSearchString(input)
    }
    const history = useNavigate()

    function sendSearchString(event) {
        event.preventDefault()
        setGlobalSearchString(searchString)
        history(`${medium}/Search`)
        setSearchString("")
    }

    return (
        <div className="flex justify-between mt-[29px] mb-[29px] w-full">
            <form
                onSubmit={sendSearchString}
                className="flex border-2 rounded-lg text-sm "
            >
                <input
                    type="text"
                    className="px-4 py-2 w-80 focus:w-[610px] duration-500 ease-in-out focus:outline-none"
                    placeholder="Search..."
                    name="searchBar"
                    onChange={changeHandler}
                    value={searchString}
                />
                <button
                    className="flex items-center justify-center px-4"
                    htmlFor="searchBar"
                    onClick={sendSearchString}
                >
                    <BsSearch className="text-[18px]" />
                </button>
            </form>
            <div className="flex items-center">
                <div className="cursor-pointer mr-[20px]">
                    <BsBell />
                </div>

                <div className="flex items-center">
                    <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer hover:bg-[#4a82f6] transition-all duration-150 delay-100 mx-[6px]">
                        <img
                            className="w-[46px] rounded-full cursor-pointer hover:brightness-75"
                            alt="User"
                            src={userObj.picture}
                        />
                    </div>
                    <div className="text-[18px] cursor-pointer">
                        {userObj.name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
