import React from "react";
import Banner from "./Banner";
import Comics from "./Comics";
import InfoBarRight from "./InfoBarRight";

function Main() {
  return (
    <div className="max-w-[1040px] m-[27px] mr-auto md:mx-auto">
      <div className="flex justify-between gap-2">
        <Banner />
        <InfoBarRight />
      </div>
      <h3 className="font-bold text-xl mb-4 mt-4">Top Rated Comics</h3>

      <Comics />
    </div>
  );
}

export default Main;
