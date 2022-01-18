import React from "react"
import Banner from "./Banner"
import Comics from "./Comics"
import FetchMovie from "./FetchMovie"

import InfoBarRight from "./InfoBarRight"

function Main() {
    return (
        <div className="max-w-[1040px] ml-[27px] mr-[27px] md:mx-auto overflow-scroll">
            <div className="flex justify-between gap-2">
                <Banner />
                <InfoBarRight />
            </div>
            <h3 className="font-bold text-xl mb-4 mt-4">Top Rated Comics</h3>

            <Comics />

            <FetchMovie />            
        </div>
    )
}

export default Main
