import React from "react"
import { useAppData } from "../Context/DataStorage"
import { useEffect } from "react"
import { v4 as uuidv4 } from "uuid" // uuidv4();
import test from "../assets/images/Image_not_available.jpeg"
import { handleList } from "./HandleList"
import PlaceHolder from "../assets/images/PlaceHolder.png"
function FetchMovie() {
    // hier werden die Daten (Sucheingabe, useReducer(lis), onEdit & onAdd geben ein dispatch weiter) aus dem Context ausgelesen.
    const { globalSearchString, list, onAdd, onEdit, fav, onAddFavList } =
        useAppData()
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
                                "",
                        },
                    }
                )
                const inputToJson = await input.json()
                // Filter: alle Einträge, die keinen Namen haben und videoGame sind, werden aus dem Array entfernt.
                const movieFiltered = inputToJson.results.filter((cV) => {
                    return cV.title && cV.titleType !== "videoGame"
                })

                const movieList = movieFiltered?.map((cV) => {
                    return {
                        id: cV.id,
                        active: false,
                        title: cV.title,
                        year: cV.year,
                        type: cV.titleType,
                        poster: cV.image ? cV.image.url : PlaceHolder,
                        runningTime: cV.runningTimeInMinutes
                            ? cV.runningTimeInMinutes
                            : "not available",
                        actors: cV.principals
                            ? cV.principals
                            : [{ name: "Not Found" }],
                    }
                })
                if (fav.length > 0) {
                    for (let i of movieList) {
                        for (let j of fav) {
                            if (i.id === j.id) {
                                i.active = true
                            }
                        }
                    }
                }
                onAdd(movieList)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [globalSearchString])
    useEffect(() => {
        // list filtern --> Ergebnis ist ein Array mit x-Objekten
        const listFilter = list.filter((movie) => movie.active === true)
        if (listFilter.length > 0) {
            if (fav.length > 0) {
                const newItems = listFilter.filter(
                    ({ id: id1 }) => !fav.some(({ id: id2 }) => id2 === id1)
                )
                if (newItems.length > 0) {
                    onAddFavList(newItems)
                }
            } else {
                onAddFavList(listFilter)
            }
        }
    }, [list])
    /*     useEffect(() => {
        const xx = localStorage.getItem("Movies-List")
        const restored = xx ? JSON.parse(xx) : []
    }, [])

    useEffect(() => {
        localStorage.setItem("Movies-List", JSON.stringify(list))
    }, [list]) */

    return (
        <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-1 w-full overflow-scroll h-[900px]">
            {/* mit der folgenden Funktion wird für jeden Film ein Card erstellt. */}
            {handleList(list, onEdit)}
        </div>
    )
}

export default FetchMovie
