import React from "react";

function Comic() {
  return (
    <div className="max-w-[337px] mr-4 scale-100 group">
      <div className="relative w-[144px] h-[220px] object-cover bg-[url('assets/images/comic-info.jpeg')] bg-cover bg-center rounded-lg group-hover:scale-110 duration-500 ease-in-out cursor-pointer"></div>
      <div className="mt-2">
        <h4 className="text-sm text-[#4A82F6] mb-1">All New Wolverine</h4>
        <p className="text-xs text-normal">Tom Roney</p>
      </div>
    </div>
  );
}

export default Comic;
