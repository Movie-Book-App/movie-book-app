import React from "react"
import { useAppData } from "../Context/DataStorage"
import { useEffect } from "react"
import { v4 as uuidv4 } from "uuid" // uuidv4();
import { MdOutlineStarBorderPurple500 } from "react-icons/md"
import { AiFillHeart } from "react-icons/ai"
function FetchMovie() {
    // hier werden die Daten (Sucheingabe, useReducer(lis), onEdit & onAdd geben ein dispatch weiter) aus dem Context ausgelesen.
    const { globalSearchString, list, onEdit, onAdd } = useAppData()

    // hier wird die Funktion fetchData aufgerufen, sobald die Seite geladen wird und 'globalSearchString' sich ändert.
    useEffect(() => {
        // mit der folgenden Funktion werden die Filme gefetcht; ein Array, movieList, angelegt. Dieses Array beinhaltet für jeden Film ein Objekt mit Daten.
        // Anschließend wird das Objekt mit dispatch an den reducer weitergegeben.
        async function fetchData() {
            try {
                const input = await fetch(
                    `https://imdb8.p.rapidapi.com/title/find?q=${globalSearchString}`,
                    {
                        method: "GET",
                        headers: {
                            "x-rapidapi-host": "imdb8.p.rapidapi.com",
                            "x-rapidapi-key": "",
                        },
                    }
                )
                const inputToJson = await input.json()
                // Filter: alle Einträge, die keinen Namen haben und videoGame sind, werden aus dem Array entfernt.
                const movieFiltered = inputToJson.results.filter((cV) => {
                    return cV.title && cV.titleType !== "videoGame"
                })

                const movieList = movieFiltered.map((cV) => {
                    return {
                        id: uuidv4(),
                        active: false,
                        title: cV.title,
                        year: cV.year,
                        type: cV.titleType,
                        poster: cV.image ? cV.image.url : "",
                        runningTime: cV.runningTimeInMinutes,
                        actors: cV.principals
                            ? cV.principals
                            : [{ name: "Not Found" }],
                    }
                })
                onAdd(movieList)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [globalSearchString])

    // mit der folgenden Funktion wird für jeden Film ein Card erstellt.
    function handleList() {
        return list.map((cV) => {
            // hier wird das Actor-Array verkürzt (nur die Namen der Schauspieler werden angezeigt) und anschließend als String ausgegeben.
            const actorList = cV.actors
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
                    className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm bg-gray-800 h-[300px]"
                >
                    <img
                        src={cV.poster}
                        alt=""
                        className="w-1/5 rounded-md bg-cover h-full bg-center object-scale-down"
                    />
                    <div className="flex flex-col ml-5 h-full w-4/5">
                        <div className="flex text-white justify-between">
                            <p className="text-xl font-semibold mb-2">
                                Title: {cV.title}
                            </p>
                            <span>{timeConvert(cV.runningTime)}</span>
                        </div>
                        <p className="mt-2 text-white">Type: {cV.type}</p>
                        <p className="mt-3 text-white">
                            Year: {cV.year ? cV.year : "Not Found"}
                        </p>
                        <p className="card-text text-white mt-6">
                            Stars: {actorList}
                        </p>
                        <div className="mt-[80px] text-[30px] flex justify-between w-full">
                            <AiFillHeart
                                key={uuidv4()}
                                className={
                                    !cV.active ? "text-white" : "text-rose-600"
                                }
                                onClick={() => onEdit(cV.id)}
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
        })
    }
    return (
        <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-1 w-full overflow-scroll h-[900px]">
            {handleList()}
        </div>
    )
}

export default FetchMovie
