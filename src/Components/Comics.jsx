import React, {useRef} from "react"
import { useDraggable } from "react-use-draggable-scroll"
import Comic from "./Comic"

function Comics() {
    const ref = useRef(null)
    const { events } = useDraggable(ref)

    return (
        <div
            className="flex flex-row overflow-x-scroll scrollbar-hide rounded-xl"
            ref={ref}
            {...events}
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
            <Comic />
            <Comic />
            <Comic />
            <Comic />
        </div>
    )
}

export default Comics
