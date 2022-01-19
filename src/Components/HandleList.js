import React from "react"
import Movie from "./Movie"

function handleList(param1, param2) {
    return param1.map((cV) => {
        return <Movie item={cV} edit={param2} />
    })
}

export { handleList }
