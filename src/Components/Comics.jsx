import React from "react"
import Comic from "./Comic"
import { useHorizontalScroll } from "../utilities/sideScroll"

function Comics() {
    const scrollRef = useHorizontalScroll()
    return (
        <div
            className="flex flex-row overflow-x-scroll scrollbar-hide rounded-xl"
            ref={scrollRef}
        >
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
        </div>
    )
}

export default Comics
