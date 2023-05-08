import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const MainProfile = () => {
  return (
    <div className="text-white relative bg-[#131414] px-6 ss:px-10 py-6 rounded-sm xs:flex justify-between items-start -z-0">
      <div className="h-full self-center">
        <img
        className="ss:w-[120px] ss:h-[120px] w-[80px] h-[80px] mx-auto xs:mx-0 object-cover rounded-full"
          src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="xs:max-w-[75%] w-full">
        <div className="flex items-center">
          <h2 className="font-bold text-[22px] ss:text-[26px]">John Doe</h2>
          <p className="mt-2 ml-4 text-gray-400 text-sm ss:text-base">2021UG1040</p>
        </div>
        <p className="mt-2 font-normal text-sm ss:text-base">
          I’m a UX designer who enjoys evening walks, deep talks, and reading
          books. I love meeting new people and learning from different
          perspectives.
        </p>
        <div className="mt-6 text-sm ss:text-base">
          <button className="bg-[#EE2A7B] px-4 py-1 rounded-sm">
            My Portfolio
          </button>
          <button className="text-[#EE2A7B] bg-white ml-6 px-4 py-1 rounded-sm">
            Resume
          </button>
        </div>
      </div>
      <div className="flex mt-6 xs:mt-0 xs:flex-col ss:flex-row gap-x-2 gap-y-4 items-center">
        <BsInstagram className="text-xl" />
        <BsLinkedin className="text-xl" />
        <BsTwitter className="text-xl" />
      </div>
    </div>
  );
};

export default MainProfile;
