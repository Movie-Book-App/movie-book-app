import React from "react"
import { useState } from "react"

function MovieSearch() {
    const [globalSearchString, setGlobalSearchString] = useState("")

    return [globalSearchString, setGlobalSearchString]
}

export default MovieSearch
