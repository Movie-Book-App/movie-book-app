import React from "react"

function Comic({name, image}) {
    return (
        <div className="max-w-[337px] px-4 scale-100 group divide-y-2">


            <div className="relative w-[144px] h-[220px] object-cover bg-cover bg-center rounded-lg             group-hover:scale-110 duration-500 ease-in-out cursor-pointer mb-3 w-full"><img className="rounded-lg shadow-md hover:shadow-xl h-full" src={image} />
            </div>


            <div className="my-2">
                <h4 className="text-sm text-[#4A82F6] mb-2 text-lg font-bold uppercase text-overflow:ellipsis w-fitt">
                    {name}
                </h4>
            </div>
        </div>
    )
}

export default Comic;
