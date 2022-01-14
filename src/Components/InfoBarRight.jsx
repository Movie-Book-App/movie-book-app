import React from 'react'
import FavHeroes from "./FavHeroes";
import InfoBox from "./InfoBox";

function InfoBarRight() {
    return (
      <div className="">
        <InfoBox />
        <h3 className="font-bold text-xl mb-3 mt-6 ">Your Faviorite Heroes</h3>
        <div className="flex justify-between mt-6">
          <FavHeroes />
        </div>
      </div>
    );
}

export default InfoBarRight
