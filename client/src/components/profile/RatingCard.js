import React from "react";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const RatingCard = ({ item }) => {
  return (
    <div className="px-2 py-4">
      <Link to={`https://${item.name}.com`} target='_blank' className="underline inline-flex font-['Source Sans 3'] items-center font-semibold text-2xl">
        {item.name} <BsArrowUpRight className="text-xs" />
      </Link>
      <div className="mt-5 flex items-center">
        <div className="w-28 h-20 rounded-sm flex items-center flex-col justify-center bg-[#131414]">
            <h2 className="font-semibold text-2xl">{item.rating}</h2>
            <p className="text-sm font-light">Rating</p>
        </div>
        <div className="w-28 h-20 rounded-sm mx-4 flex items-center flex-col justify-center bg-[#131414]">
            <h2 className="font-semibold text-2xl">{item.problemSolved}</h2>
            <p className="text-sm font-light">Problem Solved</p>
        </div>
        <div className="w-28 h-20 rounded-sm  flex items-center flex-col justify-center bg-[#131414]">
            <h2 className="font-semibold text-2xl">{item.contest}</h2>
            <p className="text-sm font-light">Contest Attended</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
