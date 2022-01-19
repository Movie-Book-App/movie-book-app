import React from "react"
import { useEffect, useReducer } from "react"
import { useAppData } from "../Context/DataStorage"
import { handleList } from "./CreateItem"

function FavoriteMovies() {
    const { list, fav, onAdd2 } = useAppData()

    useEffect(() => {
        // lesen des localStorage - favMovie-Movies
        const restored = localStorage.getItem("favMovie-Movies")
        // favMovie-Movies in ein Array umwandeln
        const favList = restored ? JSON.parse(restored) : []
    }, [])

    useEffect(() => {
        // list filtern --> Ergebnis ist ein Array mit x-Objekten
        const listFilter = list.filter((movie) => movie.active === true)
        if (listFilter.length > 0) {
            onAdd2(listFilter)
        }
    }, [list])

    return <div>{handleList(fav)}</div>
}

export default FavoriteMovies
