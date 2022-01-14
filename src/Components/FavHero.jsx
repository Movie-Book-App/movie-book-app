import React from "react";

function FavHero({bgColor, charUrl}) {
  return (
    <div className="flex flex-col">
        <div className="h-[135px] w-[90px] mt-6">
          <span className="inline-block bg-blue-300 h-[90px] w-full rounded-full -z-1">
            <img
              className="-mt-6 w-full h-[135px]"
              src={charUrl}
              width="100"
              alt=""
            />
          </span>
        </div>
    </div>
  );
}

export default FavHero;
