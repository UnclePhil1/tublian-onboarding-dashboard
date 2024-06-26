import React from "react";
import Image from "next/image";
import SearchInputBar from "./search";
import Profile from "./profile";
import { SheetMenu } from "./sheet";

const Navbar = () => {
  return (
    <div>
      {/* Flex layout for the navbar elements */}
      <div className="w-[full] bg-white p-4 flex justify-between items-center top-0 left-0 transform shadow-sm">
        <div className="flex flex-col justify-start items-start">
          <p className="text-sm m-0 p-0 text-primary/80 font-semibold md:block hidden">Metrics looking good, Snow!</p>
          <Image
            src='./Images/logo.svg'
            alt="logo"
            width={120}
            height={70}
            className="object-contain w-12 h-12 md:hidden"
          />
        </div>
        {/* Importing and rendering search bar for the navbar */}
        <SearchInputBar />
        <div className="flex justify-center items-center gap-2">
          {/* Importing and rendering the profile consisiting of Image, name & email */}
          <Profile />
          <div className="md:hidden my-auto">
            {/* Responsive Menu icon */}
            <SheetMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
