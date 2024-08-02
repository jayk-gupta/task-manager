import React from "react";
import { IoFlag } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { PiCheck } from "react-icons/pi";
function PriorityOptions() {
  return (
    <div className="w-32 rounded-lg border-[1px] pl-2">
      <button className="flex w-full items-center gap-2 hover:bg-gray-100">
        <IoFlag className="text-red-400" />
        Priority 1
      </button>
      <button className="flex w-full items-center gap-2 hover:bg-gray-100">
        <IoFlag className="text-orange-400" />
        Priority 2
      </button>
      <button className="flex w-full items-center gap-2 hover:bg-gray-100">
        <IoFlag className="text-blue-400" />
        Priority 3
      </button>
      <button className="flex w-full items-center gap-2 hover:bg-gray-100">
        <CiFlag1 className="" />
        Priority 4
      </button>
    </div>
  );
}

export default PriorityOptions;
