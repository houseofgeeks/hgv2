import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ProjectCard = ({ item }) => {
  return (
    <div className="flex mb-8 items-center">
      <img src={item.img} alt="" />
      <div className="text-white ml-8">
        <h2 className="font-medium text-2xl">{item.title}</h2>
        <div className="flex items-center my-2">
          {item.tags.map((tag) => {
            return (
              <div className="bg-black rounded-md mx-2 text-white px-2 py-1 text-xs text font-light">
                {tag}
              </div>
            );
          })}
        </div>
        <p className="font-light">{item.description}</p>
        <button className="inline-flex items-center bg-[#EE2A7B] px-4 py-1 rounded-sm mt-2">
          View <BsArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
