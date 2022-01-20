import React from "react"
//import { useEffect } from "react"
import { useAppData } from "../Context/DataStorage"
import { handleList } from "./HandleList"

function FavoriteMovies() {
    const { fav, onEditFavList } = useAppData()

    /*     useEffect(() => {
        // lesen des localStorage - favMovie-Movies
        const restored = localStorage.getItem("favMovie-Movies")
        // favMovie-Movies in ein Array umwandeln
        const favList = restored ? JSON.parse(restored) : []
    }, []) */

    return <div>{handleList(fav, onEditFavList)}</div>
}

export default FavoriteMovies
