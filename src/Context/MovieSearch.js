// import useAppData from "./DataStorage"

// const {} = useAppData()

import {useState} from "react";

import React from 'react'

function MovieSearch() {

    const [globalSearchString, setGlobalSearchString] = useState("");

    return(
        [globalSearchString, setGlobalSearchString]
    )

}

export default MovieSearch
