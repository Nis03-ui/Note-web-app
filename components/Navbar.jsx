"use client";

import { usePathname } from "next/navigation";
import { Search,Sun } from "lucide-react";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div>
        <div className="hidden md:flex items-center justify-between bg-[#070E1B] w-full h-26">
      {pathName === "/" ? (
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl text-white">Home</h1>
            <p className="font-semibold text-white">All notes are here</p>
        </div>
      ) : pathName === "/completed" ? (
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl text-white">Completed</h1>
            <p className="font-semibold text-white">All completed notes are here</p>
        </div>
      ) : pathName === "/dashboard" ? (
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl text-white">Dashboard</h1>
            <p className="font-semibold text-white">Notes Dashboard</p>
        </div>
      ) : (
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl text-white">Incomplete</h1>
            <p className="font-semibold text-white">All incomplete notes are here</p>
        </div>
      )}
     <div>
         <div className="relative w-90 max-w-md mr-20 ">
      <Search
        size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search notes..."
        className="w-full rounded-lg border border-gray-300 bg-[#091222] py-2.5 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-white"
      />
    </div>
     <Sun size={20} className="text-white"/>
     </div>
   
    </div>
    </div>
  );
} 