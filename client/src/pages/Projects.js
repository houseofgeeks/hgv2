import ProjectCard from "../components/project/ProjectCard";
import frame from "../assets/frame.png";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjectData } from "../redux/features/projectSlice";
import Loader from "../components/loader/Loader";

const category = ["Ongoing", "Past", "Upcoming"];

// const ProjectsData = [
//   {
//     id: 1,
//     title: "Load Balancer with Arduino and Raspberry Pi",
//     lead: "Naitik Mishra",
//     createdAt: "30/01/23",
//     wings: ["SDE", "AI/ML", "Robotics"],
//     img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     id: 2,
//     title: "Load Balancer with Arduino and Raspberry Pi",
//     lead: "Naitik Mishra",
//     createdAt: "30/01/23",
//     wings: ["SDE", "AI/ML", "Robotics"],
//     img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     id: 3,
//     title: "Load Balancer with Arduino and Raspberry Pi",
//     lead: "Naitik Mishra",
//     createdAt: "30/01/23",
//     wings: ["SDE", "AI/ML", "Robotics"],
//     img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     id: 4,
//     title: "Load Balancer with Arduino and Raspberry Pi",
//     lead: "Naitik Mishra",
//     createdAt: "30/01/23",
//     wings: ["SDE", "AI/ML", "Robotics"],
//     img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     id: 5,
//     title: "Load Balancer with Arduino and Raspberry Pi",
//     lead: "Naitik Mishra",
//     createdAt: "30/01/23",
//     wings: ["SDE", "AI/ML", "Robotics"],
//     img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     id: 6,
//     title: "Load Balancer with Arduino and Raspberry Pi",
//     lead: "Naitik Mishra",
//     createdAt: "30/01/23",
//     wings: ["SDE", "AI/ML", "Robotics"],
//     img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
// ];

const Projects = () => {
  const [currCategory, setCurrCategory] = useState(0);
  const [filterData, setFilterData] = useState([]);

  const { 
    projectData, 
    loading, 
    error 
  } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectData());
    setFilterData( 
      projectData.filter((item) => item?.status === category[currCategory])
    )
  }, [dispatch, currCategory, projectData]);

  // if (loading) {
  //   return <Loader />;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="bg-[#010203] text-white pt-4 pb-6">
      <div className="px-12 ss:px-24 mx-auto">
        <h1 className="font-medium text-xl sm:text-2xl mb-9">Projects</h1>
        <div className="flex items-center gap-16">
            {category.map((item, index) => (
                <div
                    key={index}
                    className={`text-sm sm:text-xl cursor-pointer ${currCategory !== index && "text-[#919090]"} ${
                        currCategory === index && "text-[#EE2A7B] border-[#EE2A7B] border rounded-full px-6 py-2"
                    }`}
                    onClick={() => setCurrCategory(index)}
                >
                    {item} Project
                </div>
            ))}
        </div>
        <div className="h-[1px] w-full bg-[#6F757E] my-6" />
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {filterData?.map(
            (project) => (
              <ProjectCard
                key={project?._id}
                title={project?.title}
                lead={project?.leadBy?.name}
                createdAt={"31/04/23"}
                wings={project?.wingsInvolved}
                status={project?.status}
                image={frame}
                img={project?.peopleInvolved}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
