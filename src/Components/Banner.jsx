import React from "react"

function Banner() {
    return (
        <div className="relative bg-[url('assets/images/spider-man.jpeg')] h-[450px] min-w-[663px] rounded-2xl bg-center ">
            <div className="absolute h-[103px] w-[330px] bottom-[20px] left-[27px] text-white mb-1 font-normal">
                <p className="text-sm">Nich Spencer</p>
                <h3>the Amazing Spider-Man Vol. 1: Back To Basics</h3>
            </div>
            <div className="absolute bottom-[27px] right-[27px]">
                <button
                    type="submit"
                    className=" bg-[#3238e6] hover:bg-[#487ade] text-white rounded-full w-[140px] h-[50px] flex items-center justify-center"
                >
                    <span className="text-sm font-semibold">Read Now</span>
                </button>
            </div>
        </div>
    )
}

export default Banner
