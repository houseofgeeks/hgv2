import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import ellipse from "../../assets/level_ellipse.svg";

const ProjectCard = ({ title, lead, createdAt, wings, status, image, img }) => {
  return (
    <div className="border pb-4 sm:pb-8">
      <img src={image} alt={title} className="w-full" />
      <div className="flex flex-row justify-between mx-5 mt-2 mb-4">
        <div className="text-center text-xs">
          <p className="text-gray-200 font-light">Started on</p>
          <div>{createdAt}</div>
        </div>
        <div className="text-center text-xs">
          <p className="text-gray-200 font-light">Lead by</p>
          <div>{lead}</div>
        </div>
      </div>
      <p className="mx-5 text-lg">{title}</p>
      <div className="mx-5 flex gap-4 my-4">
        {wings?.map((wing) => (
          <div className="text-xs text-center mx-2">{wing}</div>
        ))}
      </div>
      <div className="flex items-center mt-2 mx-5">
        {img?.slice(0, 4).map((e, i) => {
          return (
            <img
              src={ellipse}
              key={i}
              className="relative z-0"
              style={{ right: `${8 * i}px` }}
              alt="ellipse"
            />
          );
        })}
        {img.length > 4 ? <span className="-ml-5 font-light">+{img.length - 4}</span> : <></>}
      </div>
      <p className="mt-5 mx-5 text-pink-600 underline decoration-pink-600 underline-offset-4 read">
        <Link to={`/`}>
          Read More
          <FiArrowUpRight className="inline text-base ml-[1px]" />
        </Link>
      </p>
    </div>
  );
};

export default ProjectCard;
