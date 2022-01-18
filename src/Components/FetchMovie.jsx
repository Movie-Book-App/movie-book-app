import React from "react"
import { useAppData } from "../Context/DataStorage"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid" // uuidv4();
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { MdOutlineStarBorderPurple500 } from "react-icons/md"
function FetchMovie() {
    const [movieInfo, setMovieInfo] = useState([])
    const { globalSearchString } = useAppData()

    useEffect(() => {
        fetch(
            `https://imdb8.p.rapidapi.com/title/find?q=${globalSearchString}`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "imdb8.p.rapidapi.com",
                    "x-rapidapi-key": "",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                const movieFiltered = data.results.filter((cV) => cV.title)
                const movieList = movieFiltered.map((cV) => {
                    return {
                        title: cV.title,
                        year: cV.year,
                        type: cV.titleType,
                        poster: cV.image ? cV.image.url : "",
                        actors: cV.principals
                            ? cV.principals
                            : [{ name: "Not Found" }],
                    }
                })
                setMovieInfo(movieList)
            })
    }, [globalSearchString])
    function handleList() {
        return movieInfo.map((cV) => {
            const actorList = cV.actors
                .map((cV) => {
                    return cV.name
                })
                .join(", ")

            return (
                <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 h-[300px]">
                    <img
                        src={cV.poster}
                        alt=""
                        className="w-1/5 rounded-md bg-cover h-full bg-center object-scale-down"
                    />
                    <div className="flex flex-col ml-5 h-full w-4/5">
                        <p className="text-xl font-semibold mb-2 text-white">
                            Title: {cV.title}
                        </p>
                        <p className="mt-2 text-white">Type: {cV.type}</p>
                        <p className="mt-3 text-white">
                            Year: {cV.year ? cV.year : "Not Found"}
                        </p>
                        <p className="card-text text-white mt-6">
                            Stars: {actorList}
                        </p>
                        <div className="mt-[80px] text-[30px] flex justify-between w-full">
                            <MdOutlineFavoriteBorder className="text-white" />
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
        })
    }
    return (
        <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-1 w-full overflow-scroll h-[900px]">
            {handleList()}
        </div>
    )
}

export default FetchMovie
