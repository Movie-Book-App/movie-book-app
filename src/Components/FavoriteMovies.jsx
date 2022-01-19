import React from "react"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid" // uuidv4();
import { AiFillHeart } from "react-icons/ai"
import { MdOutlineStarBorderPurple500 } from "react-icons/md"
import { useAppData } from "../Context/DataStorage"
import Movie from "./Movie"
function FavoriteMovies() {
    const { onEdit } = useAppData()
    const [favMovie, setFavMovie] = useState([])
    // liste
    const [pl, setPl] = useState([])

    useEffect(() => {
        // lesen des localStorage - Movies-List
        const readList = localStorage.getItem("Movies-List")
        // Movies-List in ein Array umwandeln und an pl übergeben
        const restoredList = readList ? setPl(JSON.parse(readList)) : []
        // lesen des localStorage - favMovie-Movies
        const restored = localStorage.getItem("favMovie-Movies")
        // favMovie-Movies in ein Array umwandeln
        const favList = restored ? JSON.parse(restored) : []
    }, [])

    useEffect(() => {
        // pl filtern
        const listFilter = pl.filter((movie) => movie.active === true)
        // favList in localStorage speichern
        const newList = [...listFilter]
        setFavMovie([...favMovie, ...newList])
    }, [pl])

    useEffect(() => {
        localStorage.setItem("favMovie-Movies", JSON.stringify(favMovie))
    }, [favMovie])

    function handleList() {
        return favMovie.map((cV) => {
            return <Movie item={cV} />
        })
    }
    return <div>{handleList()}</div>
}

export default FavoriteMovies
