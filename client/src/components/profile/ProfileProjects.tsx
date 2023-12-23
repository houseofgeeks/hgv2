import { projectData } from "@/utils";
import ProjectCard from "./ProjectCard";

const ProfileProjects = () => {
  
  return (
    <div className="bg-secondary-bg px-8 ss:px-10 py-6 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold text-white">Projects</h2>
      <div className="mt-6">
        {projectData.map((item, index) => {
          return <ProjectCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ProfileProjects;
