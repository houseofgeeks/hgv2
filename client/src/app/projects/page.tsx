'use client'

import frame from "@/../public/frame.png";
import { useState} from "react";
import { ProjectsData } from "@/utils";
import ProjectCard from "@/components/cards/ProjectCard";

const category = ["Ongoing", "Past", "Upcoming"];

const Page = () => {
  const [currCategory, setCurrCategory] = useState(0);

  return (
    <div className="px-6 flex flex-col gap-8 py-6 container mx-auto">
        <h1 className="font-semibold text-xl sm:text-2xl">Projects</h1>
        <div className="flex items-center gap-12">
          {category.map((item, index) => (
            <div
              key={index}
              className={`text-[12px] xs:text-sm sm:text-lg cursor-pointer ${
                currCategory !== index && "text-[#919090]"
              } ${
                currCategory === index &&
                "text-[#EE2A7B] border-[#EE2A7B] border-[1.5px] rounded-full px-5 py-1"
              }`}
              onClick={() => setCurrCategory(index)}
            >
              {item} Project
            </div>
          ))}
        </div>
        <div className="h-[1px] w-full bg-[#6F757E] -mt-5" />
        <div className="grid grid-cols-1 ss:grid-cols-2 lg:grid-cols-3 gap-8 px-0 xs:px-8 ss:px-0 mb-8">
          {ProjectsData?.map((project) => (
            <ProjectCard
              key={project?.id}
              title={project?.title}
              lead={project?.lead}
              createdAt={"31/04/23"}
              wings={project?.wings}
              status={"Done"}
              image={frame}
              img={project?.img}
            />
          ))}
        </div>
      </div>
  );
};

export default Page;