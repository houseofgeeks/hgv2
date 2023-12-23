import Image from "next/image";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import dp from "@/../public/profile/dp.jpeg";

const MainProfile = () => {
  return (
    <div className="bg-secondary-bg px-4 xs:px-6 sm:px-10 py-6 rounded-md shadow-lg grid grid-cols-4 ss:gap-4 md:gap-0 space-y-6 ss:space-y-0 ss:grid-cols-11 md:grid-cols-12">
      <div className="h-full col-span-2 self-center">
        <Image
          src={dp}
          alt=""
          className="lg:w-[140px] lg:h-[140px] ss:w-[120px] ss:h-[120px] xs:w-[100px] xs:h-[100px] w-[80px] h-[80px] mx-auto xs:mx-0 object-cover rounded-full"
        />
      </div>
      <div className="col-span-9 w-full">
        <div className="flex items-center">
          <h2 className="font-bold text-lg xs:text-xl ss:text-2xl">
            Mittal Sudhanshu
          </h2>
          <p className="mt-2 ml-4 text-gray-400 text-xs xs:text-sm ss:text-base">
            2021UG4004
          </p>
        </div>
        <p className="mt-2 font-normal text-xs xs:text-sm ss:text-base">
          I’m a UX designer who enjoys evening walks, deep talks, and reading
          books. I love meeting new people and learning from different
          perspectives.
        </p>
        <div className="mt-6 text-xs xs:text-sm space-x-4 ss:text-base">
          <button className="bg-primary-color px-4 py-1 rounded-sm hover:bg-white hover:text-primary-color">
            My Portfolio
          </button>
          <button className="text-primary-color bg-white hover:bg-primary-color hover:text-white px-4 py-1 rounded-sm">
            Resume
          </button>
        </div>
      </div>
      <div className="flex text-lg xs:text-2xl gap-x-3 mx-auto md:items-start md:pl-0">
        <BsInstagram className="cursor-pointer hover:text-[#F56040]" />
        <BsLinkedin className="cursor-pointer hover:text-[#0e76a8]" />
        <BsTwitter className="cursor-pointer hover:text-[#1da1f2]" />
      </div>
    </div>
  );
};

export default MainProfile;
