import React from "react";
import { BsArrowRight } from "react-icons/bs";

const BlogCard = ({ item }) => {
  return (
    <div className="flex flex-col  items-start">
      <img className="object-cover" src={item.img} alt="" />
      <div className="text-white">
        <h2 className="font-medium mt-4 mb-3 text-2xl">
          {item.title.slice(0, 26)}...
        </h2>
        <p className="font-light">{item.description}</p>
      </div>
      <button className="flex items-center text-white mt-4">
        <p className="underline text-[#EE2A7B] underline-offset-2 decoration-[#EE2A7B]">Click to View</p>
        <BsArrowRight className='text-[#EE2A7B] ml-5' />
      </button>
    </div>
  );
};

export default BlogCard;
