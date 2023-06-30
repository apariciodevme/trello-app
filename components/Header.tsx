"use client";

import Image from "next/image";
import {
  UserIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col items-center p-5 md:flex-row bg-gray-500/10 rounded-b-2xl ">
        {/*gradient*/}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50  -z-50" />

        <Image
          src={"https://links.papareact.com/c2cdd5"}
          width={120}
          height={100}
          alt="logo"
          className="pb-10 max-w-44 md:max-w-56 md:pb-0"
        />

        <div className="flex items-center justify-end flex-1 w-full space-x-5 ">
          {/*Search box*/}
          <form className="flex items-center flex-1 p-2 space-x-5 bg-white rounded-md shadow-md md:flex-initial">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
            <input
              className="flex-1 p-2 outline-none"
              placeholder="Search"
              type="text"
            />
            <button type="submit" className="hidden">
              Search
            </button>
          </form>

          {/*  Avatar  */}

          <Avatar round color="#0055D1" size="50px" name="Diego" />
          
        </div>
        
      </div>

      {/*Suggestions */}
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex bg-neutral-50 items-center pr-5 text-[#0055D1] text-sm italic px-5 py-2 font-light shadow-xl rounded-xl max-w-3xl:">
          <UserCircleIcon className="inline-block w-10 h-10 text-[#0055D1] mr-1" />
          GPT is summarizing your tasks for the day.
        </p>
      </div>
    </header>
  );
};

export default Header;
