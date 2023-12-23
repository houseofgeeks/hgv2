import { FiArrowUpRight } from "react-icons/fi";
import ellipse from "@/../public/level_ellipse.svg";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  lead: string;
  createdAt: string;
  wings: string[];
  status?: string;
  image: StaticImageData;
  img: number[];
}

const ProjectCard = ({ title, lead, createdAt, wings, status, image, img }: ProjectCardProps) => {
  return (
    <div className="border-[1.5px] border-[#6F757E] rounded-sm shadow-lg pb-4 sm:pb-8">
      <Image
        src={image}
        alt={title}
        className="w-full border-b-2 border-black shadow-md"
      />
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
      <p className="mx-5 text-base xs:text-lg">{title}</p>
      <div className="mx-5 flex gap-4 my-4">
        {wings?.map((wing: any, index: number) => (
          <div key={index} className="text-[12px] xs:text-xs text-center mx-2">
            {wing}
          </div>
        ))}
      </div>
      <div className="flex items-center mt-2 mx-5">
        {img?.slice(0, 4).map((e: any, index: number) => {
          return (
            <Image
              src={ellipse}
              key={index}
              className="relative z-0"
              style={{ right: `${8 * index}px` }}
              alt="ellipse"
            />
          );
        })}
        {img.length > 4 ? (
          <span className="-ml-5 font-light">+{img.length - 4}</span>
        ) : (
          <></>
        )}
      </div>
      <p className="mt-5 mx-5 text-pink-600 hover:underline decoration-pink-600 hover:underline-offset-4 read">
        <Link href={`/`}>
          Read More
          <FiArrowUpRight className="inline text-sm xs:text-base ml-[1px]" />
        </Link>
      </p>
    </div>
  );
};

export default ProjectCard;
