import React from "react"
import { useAppData } from "../Context/DataStorage"


function Favorites() {
    const { userObj } = useAppData();
    const medium = userObj.mediaType

    return (
        <div>
            <h1>{medium} Favorites</h1>
        </div>
    )
}

export default Favorites
