import React from "react"
import { useAppData } from "../Context/DataStorage"
import { useEffect } from "react"
import { v4 as uuidv4 } from "uuid" // uuidv4();
import { handleList } from "./CreateItem"
import test from "../assets/images/Image_not_available.jpeg"

function FetchMovie() {
    // hier werden die Daten (Sucheingabe, useReducer(lis), onEdit & onAdd geben ein dispatch weiter) aus dem Context ausgelesen.
    const { globalSearchString, list, onAdd } = useAppData()
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
                            "x-rapidapi-key":
                                "e5dd24af62mshdfc9f506eec1ff3p1c0da7jsn671c8947b3ba",
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
                        poster: cV.image ? cV.image.url : test,
                        runningTime: cV.runningTimeInMinutes
                            ? cV.runningTimeInMinutes
                            : "not available",
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

    useEffect(() => {
        const xx = localStorage.getItem("Movies-List")
        const restored = xx ? JSON.parse(xx) : []
    }, [])

    useEffect(() => {
        localStorage.setItem("Movies-List", JSON.stringify(list))
    }, [list])

    return (
        <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-1 w-full overflow-scroll h-[900px]">
            {/* mit der folgenden Funktion wird für jeden Film ein Card erstellt. */}
            {handleList(list)}
        </div>
    )
}

export default FetchMovie
