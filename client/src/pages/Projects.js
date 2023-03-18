import ProjectCard from "../components/project/ProjectCard";
import frame from "../assets/frame.png";
import { useState } from "react";

const category = ["Ongoing Project", "Past Project", "Upcoming Project"];

const ProjectData = [
  {
    id: 1,
    title: "Load Balancer with Arduino and Raspberry Pi",
    lead: "Naitik Mishra",
    createdAt: "30/01/23",
    wings: ["SDE", "AI/ML", "Robotics"],
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 2,
    title: "Load Balancer with Arduino and Raspberry Pi",
    lead: "Naitik Mishra",
    createdAt: "30/01/23",
    wings: ["SDE", "AI/ML", "Robotics"],
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 3,
    title: "Load Balancer with Arduino and Raspberry Pi",
    lead: "Naitik Mishra",
    createdAt: "30/01/23",
    wings: ["SDE", "AI/ML", "Robotics"],
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 4,
    title: "Load Balancer with Arduino and Raspberry Pi",
    lead: "Naitik Mishra",
    createdAt: "30/01/23",
    wings: ["SDE", "AI/ML", "Robotics"],
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 5,
    title: "Load Balancer with Arduino and Raspberry Pi",
    lead: "Naitik Mishra",
    createdAt: "30/01/23",
    wings: ["SDE", "AI/ML", "Robotics"],
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 6,
    title: "Load Balancer with Arduino and Raspberry Pi",
    lead: "Naitik Mishra",
    createdAt: "30/01/23",
    wings: ["SDE", "AI/ML", "Robotics"],
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
];

const Projects = () => {
  const [currCategory, setCurrCategory] = useState(0);
  return (
    <div className="bg-[#010203] text-white pt-4 pb-6">
      <div className="px-24 mx-auto">
        <h1 className="font-medium text-xl sm:text-2xl mb-9">Projects</h1>
        <div className="flex items-center gap-16">
            {category.map((item, index) => (
                <div
                    key={index}
                    className={`sm:text-xl cursor-pointer ${currCategory !== index && "text-[#919090]"} ${
                        currCategory === index && "text-[#EE2A7B] border-[#EE2A7B] border rounded-full px-6 py-2"
                    }`}
                    onClick={() => setCurrCategory(index)}
                >
                    {item}
                </div>
            ))}
        </div>
        <div className="h-[1px] w-full bg-[#6F757E] my-6" />
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {ProjectData?.map(
            ({ title, id, lead, createdAt, wings, image, img }) => (
              <ProjectCard
                key={id}
                title={title}
                lead={lead}
                createdAt={createdAt}
                wings={wings}
                image={image ? image : frame}
                img={img}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
