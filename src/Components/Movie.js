import React from "react"
import { v4 as uuidv4 } from "uuid" // uuidv4();
import { MdOutlineStarBorderPurple500 } from "react-icons/md"
import { AiFillHeart } from "react-icons/ai"
import { useAppData } from "../Context/DataStorage"
function Movie(props) {
    const { id, active, title, year, type, poster, runningTime, actors } =
        props.item
    //const { onEdit } = useAppData()
    // hier wird das Actor-Array verkürzt (nur die Namen der Schauspieler werden angezeigt) und anschließend als String ausgegeben.
    const actorList = actors
        .map((cV) => {
            return cV.name
        })
        .join(", ")

    // mit der folgenden Funktion wird die Länge des Films in Minuten in Stunden und Minuten umgerechnet.
    function timeConvert(n) {
        let num = n
        let hours = num / 60
        let rhours = Math.floor(hours)
        let minutes = (hours - rhours) * 60
        let rminutes = Math.round(minutes)
        return rhours + "h " + rminutes + "m"
    }

    return (
        <div
            key={uuidv4()}
            className="flex items-center p-4 border-2 border-gray-200 rounded-lg shadow-sm bg-gray-800 h-[300px]"
        >
            <img
                src={poster}
                alt=""
                className="w-1/5 rounded-md bg-cover h-full bg-center object-scale-down"
            />
            <div className="flex flex-col ml-5 h-full w-4/5">
                <div className="flex text-white justify-between">
                    <p className="text-xl font-semibold mb-2">Title: {title}</p>
                    <span>
                        {isNaN(runningTime)
                            ? "not available"
                            : timeConvert(runningTime)}
                    </span>
                </div>
                <p className="mt-2 text-white">Type: {type}</p>
                <p className="mt-3 text-white">
                    Year: {year ? year : "Not Found"}
                </p>
                <p className="card-text text-white mt-6">Stars: {actorList}</p>
                <div className="mt-[80px] text-[30px] flex justify-between w-full">
                    <AiFillHeart
                        key={uuidv4()}
                        className={!active ? "text-white" : "text-rose-600"}
                        onClick={() => props.edit(id)}
                    />
                    <div className="flex mr-5 text-white">
                        <MdOutlineStarBorderPurple500 />
                        <MdOutlineStarBorderPurple500 />
                        <MdOutlineStarBorderPurple500 />
                        <MdOutlineStarBorderPurple500 />
                        <MdOutlineStarBorderPurple500 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie
