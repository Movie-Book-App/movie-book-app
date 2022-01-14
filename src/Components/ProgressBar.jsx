import React, { useState } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

function ProgressBar() {
    const [value, setValue] = useState(65)

    return (
        <div className="absolute right-1 bottom-1 w-[87px] h-[87px]">
            <CircularProgressbar
                className="text-white"
                value={value}
                text={`${value}%`}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.06,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",

                    // Text size
                    textSize: "22px",

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(74, 130, 246, ${value / 100})`,
                    textColor: "#fff",
                    trailColor: "#fff",
                })}
            />
        </div>
    )
}

export default ProgressBar
