import React from "react"
import { useAppData } from "../Context/DataStorage"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid" // uuidv4();
function FetchMovie() {
    const [movieInfo, setMovieInfo] = useState({})
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
            .then((data) =>
                setMovieInfo({
                    title: data.results[0].title,
                    year: data.results[0].year,
                    image: data.results[0].image.url,
                    actors: data.results[0].principals.map(
                        (actor) => actor.name
                    ),
                })
            )
    }, [globalSearchString])
    function xx() {
        const arr = movieInfo.actors ? movieInfo.actors : []
        return arr.map((actor) => {
            return <li key={uuidv4()}>{actor}</li>
        })
    }
    return (
        <div>
            <div>{movieInfo.title}</div>
            <div>{movieInfo.year}</div>
            <div>{movieInfo.image}</div>
            <ul>{xx()}</ul>
        </div>
    )
}

export default FetchMovie
