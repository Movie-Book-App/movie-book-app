import React from "react"
import { useAppData } from "../Context/DataStorage"

function Collection() {
    const { userObj } = useAppData();
    const medium = userObj.mediaType

    return (
        <div>
            <h1>{medium} Collection</h1>
        </div>
    )
}

export default Collection
