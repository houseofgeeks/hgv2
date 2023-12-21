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

  const handleCloseMenu = () => {
    setIsOpen(false);
  }

  return (
    <div className="bg-primary-navBg lg:px-4 px-3 h-16 flex items-center relative shadow">
      <header className="container mx-auto flex justify-between items-center">

        {/* logo section  */}
        <div className="text-white w-20 h-10 relative">
          <Image src={"/logo.svg"} fill alt="house of geeks logo" />
        </div>

        {/* nav menu items section */}
        <div className="sm:flex items-center gap-8 hidden">
          <NavItems />
        </div>

        {/* profile menu section */}
        <Link href={'/profile'} className="hidden sm:flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src={"/profile-demo.svg"}
              fill
              className="rounded-full"
              alt="profile photo"
            />
          </div>
        </Link>

        {/* for mobile view */}
        <div
          onClick={handleToggleMenu}
          className="sm:hidden flex items-center justify-center text-xl text-white"
        >
          {isOpen ? <RxCross2 /> : <HiMenuAlt4 />}
        </div>
      </header>

      <div className={`py-6 px-4 sm:hidden flex ${isOpen ? "translate-y-0" : "translate-y-full"} transition-all duration-200 ease-in top-[4rem] flex-col gap-4 fixed z-10 bottom-0 inset-x-0 bg-[#0e0e0f] text-white`}>

        {/* profile section  */}
        <div className="px-4 py-2 flex items-center gap-4">
          <div className="relative w-12 h-12">
            <Image
              src={"/profile-demo.svg"}
              fill
              className="rounded-full"
              alt="profile photo"
            />
          </div>
          <div className="flex flex-col pt-1">
            <div className="text-lg font-medium">Sudhanshu Mittal</div>
            <Link
              href={"/profile"}
              className="text-sm font-extralight text-primary-color flex items-center"
            >
              view profile <FiArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="bg-[#474747] mb-4 h-[0.1px] w-full" />

        {/* nav menu items section */}
        <div className="flex flex-col gap-0.5 items-center text-xl">
          <NavItems handleClose={handleCloseMenu} />
        </div>

      </div>

    </div>
  );
};

export default Navbar;
