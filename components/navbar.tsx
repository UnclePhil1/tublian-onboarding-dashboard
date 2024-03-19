import React from "react";
import Link from "next/link";
import SearchInputBar from "./search";
import Profile from "./profile";

const Navbar = () => {
  return (
    <div>
      <div className="w-[full] bg-white p-4 flex justify-between items-center top-0 left-0 transform">
        <div className="flex flex-col justify-start items-start">
          <p className="text-sm m-0 p-0 text-primary/80 font-semibold">Metrics looking good, Snow!</p>
        </div>
        <SearchInputBar />
        <div className="flex justify-center items-center gap-2">
            <Profile />
          <div className="md:hidden my-auto">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
