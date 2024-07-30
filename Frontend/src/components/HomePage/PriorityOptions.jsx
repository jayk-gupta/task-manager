import React from "react";
import { IoFlag } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { PiCheck } from "react-icons/pi";
function PriorityOptions() {

  return (
    <div className=" pl-2 border-[1px] w-32 rounded-lg">
      <button className="flex gap-2 items-center hover:bg-gray-100 w-full">
        <IoFlag className="text-red-400" />
        Priority 1
      </button>
      <button className="flex gap-2 items-center hover:bg-gray-100 w-full">
        <IoFlag className="text-orange-400" />
        Priority 2
      </button>
      <button className="flex gap-2 items-center hover:bg-gray-100 w-full">
        <IoFlag className="text-blue-400" />
        Priority 3
      </button>
      <button className="flex gap-2 items-center hover:bg-gray-100 w-full">
        <CiFlag1 className="" />
        Priority 4
      </button>
    </div>
  );
}

export default PriorityOptions;
