import React from "react"
import Banner from "./Banner"
import Comics from "./Comics"
import InfoBarRight from "./InfoBarRight"
import { useParams } from "react-router-dom";

function Main() {
    
    const neu = useParams();
    console.log(neu);

    return (
        <div className="max-w-[1040px] ml-[27px] mr-[27px] md:mx-auto overflow-scroll">
            <div className="flex justify-between gap-2">
                <Banner />
                <InfoBarRight />
            </div>
            <h3 className="font-bold text-xl mb-4 mt-4">Top Rated Comics</h3>

            <Comics />
        </div>
    )
}

export default Main
