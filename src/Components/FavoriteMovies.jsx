import React from "react"
import { useEffect, useReducer } from "react"
import { useAppData } from "../Context/DataStorage"
import { handleList } from "./HandleList"

function FavoriteMovies() {
    const { list, fav, onAddFavList, onEditFavList } = useAppData()

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
            onAddFavList(listFilter)
        }
    }, [list])

    return <div>{handleList(fav, onEditFavList)}</div>
}

export default FavoriteMovies
