import React from "react";
import banner1 from "../../assets/profile/projectbanner1.svg";
import banner2 from "../../assets/profile/projectbanner2.svg";
import ProjectCard from "./ProjectCard";
const ProfileProjects = () => {
  const projectData = [
    {
      img: banner1,
      title: "Gifty | UI/UX Case Study",
      tags: ["Figma", "Miro", "Invision"],
      description:
        "This project is a part of my assignment for the Designwings Bootcamp. Where we’re asked to pick any problem statement and design the solution for the product.",
    },
    {
      img: banner2,
      title: "Dojo | Language Learning App for Kids",
      tags: ["Figma", "G-suite"],
      description:
        "Dojo is a learning platform that aims to gamify the learning experience for kids. The app engages kids in various different games, short animation videos, in listening to some amazing stories and in talking with their friends.",
    },
  ];
  return (
    <div className="bg-[#131414] px-8 ss:px-10 py-6 rounded-sm mt-6">
      <h2 className="text-2xl font-bold text-white">Projects</h2>
      <div className="mt-6">
        {projectData.map((item) => {
          return <ProjectCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default ProfileProjects;
