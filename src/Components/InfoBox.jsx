import React from 'react'
import ProgressBar from "./ProgressBar";


function InfoBox() {
    return (
      <div className="min-w-[337px]">
        <h3 className="font-bold text-xl mb-4">Continue Reading</h3>

        <div className="relative w-[337px] h-[192px] object-cover bg-[url('assets/images/comic-info.jpeg')] bg-cover bg-center rounded-2xl bg-blend-darken">
          <p className="pt-[30px] pl-[30px] text-sm w-[243px] leading-6 text-white">
            Peter Parker: The Spectacular Spider-Man #309
          </p>

          <div className="absolute right-[27px] bottom-[22px] w-[87px] h-[87px]">
            <ProgressBar />
          </div>
        </div>
      </div>
    );
}

export default InfoBox
