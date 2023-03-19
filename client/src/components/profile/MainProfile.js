import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const MainProfile = () => {
  return (
    <div className="text-white relative bg-[#131414] px-10 py-6 rounded-sm flex justify-between items-start">
      <div className="h-full self-center">
        <img
        className="w-[120px] h-[120px] object-cover rounded-full"
          src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="max-w-[75%]">
        <div className="flex items-center">
          <h2 className="font-bold text-[26px]">John Doe</h2>
          <p className="mt-2 ml-4 text-gray-400">2021UG1040</p>
        </div>
        <p className="mt-2 font-normal">
          I’m a UX designer who enjoys evening walks, deep talks, and reading
          books. I love meeting new people and learning from different
          perspectives.
        </p>
        <div className="mt-6">
          <button className="bg-[#EE2A7B] px-4 py-1 rounded-sm">
            My Portfolio
          </button>
          <button className="text-[#EE2A7B] bg-white ml-6 px-4 py-1 rounded-sm">
            Resume
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <BsInstagram className="text-xl mx-2" />
        <BsLinkedin className="text-xl mx-2" />
        <BsTwitter className="text-xl mx-2" />
      </div>
    </div>
  );
};

export default MainProfile;
