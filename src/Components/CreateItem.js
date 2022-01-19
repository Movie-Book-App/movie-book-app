import React from "react"
import Movie from "./Movie"

function handleList(param) {
    return param.map((cV) => {
        return <Movie item={cV} />
    })
}

export { handleList }
