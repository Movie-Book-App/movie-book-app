import React, {useRef} from "react"
import { useDraggable } from "react-use-draggable-scroll"
import Comic from "./Comic"
import FetchMovie from "./FetchMovie"
import data from "./data"
console.log(data)

function Comics() {
    const ref = useRef(null)
    const { events } = useDraggable(ref)

    const comicList = data.map((item, index) => (
        <Comic key={index} name={item.name} image={item.image} />
    ))

    return (
        <div
            className="flex flex-row overflow-x-scroll scrollbar-hide rounded-xl"
            ref={ref}
            {...events}
        >
            {comicList}
        </div>
    )
}

export default Comics
