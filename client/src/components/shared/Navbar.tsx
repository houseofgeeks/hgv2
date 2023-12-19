"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavItems from "./navbar/NavItems";
import { HiMenuAlt4 } from "react-icons/hi";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-primary-navBg lg:p-4 px-2 py-3 relative">
      <header className="container mx-auto flex justify-between items-center">
        {/* logo section  */}
        <div className="text-white w-20 h-10 relative">
          <Image src={"/logo.svg"} fill alt="house of geeks logo" />
        </div>

        {/* nav menu items section */}
        <div className="md:flex items-center gap-8 hidden">
          <NavItems />
        </div>

        {/* profile menu section */}
        <div className="hidden md:flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src={"/profile-demo.svg"}
              fill
              className="rounded-full"
              alt="profile photo"
            />
          </div>
        </div>

        {/* for mobile view */}
        <div
          onClick={handleToggleMenu}
          className="md:hidden flex items-center justify-center text-xl text-white"
        >
          {isOpen ? <RxCross2 /> : <HiMenuAlt4 />}
        </div>
      </header>

      <div
        className={`py-6 pb-4 px-4 md:hidden ${
          isOpen ? "flex" : "hidden"
        } flex-col absolute z-10 left-0 right-0 top-full bg-[#0e0e0f] text-white`}
      >
        {/* profile section  */}
        <div className="px-4 py-2 bg-secondary-bg rounded-md flex items-center gap-4">
          <div className="relative w-8 h-8">
            <Image
              src={"/profile-demo.svg"}
              fill
              className="rounded-full"
              alt="profile photo"
            />
          </div>
          <div className="flex flex-col pt-1">
            <div className="text-sm">Naam hai Kuch</div>
            <Link
              href={"/profile"}
              className="text-xs font-extralight text-primary-color flex items-center"
            >
              view profile <FiArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="bg-secondary-bg my-4 h-[0.1px] w-full" />

        {/* nav menu items section */}
        <div className="flex flex-col gap-0.5 items-center text-sm">
          <NavItems />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
