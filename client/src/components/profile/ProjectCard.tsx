import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  img: StaticImageData;
  title: String;
  tags: String[];
  description: String;
}

interface ContestRatingProps<T> {
  item: T;
}

const ProjectCard: React.FC<ContestRatingProps<Props>> = ({ item }) => {
  return (
    <div className="ss:flex mb-8 items-center">
      <Image src={item.img} className="rounded-md mx-auto" alt="" />
      <div className="text-white ss:ml-8">
        <h2 className="font-medium mt-4 ss:mt-0 text-lg xs:text-xl ss:text-2xl">
          {item.title}
        </h2>
        <div className="flex items-center space-x-2 my-2">
          {item.tags.map((tag, index) => {
            return (
              <div
                className="bg-black rounded-md shadow-xl px-2 py-1 text-xs xs:text-sm font-light hover:scale-95 cursor-pointer"
                key={index}
              >
                {tag}
              </div>
            );
          })}
        </div>
        <p className="font-light text-sm xs:text-base">{item.description}</p>
        <Link href={"/"}>
          <p className="inline-flex text-xs xs:text-base items-center bg-primary-color hover:text-primary-color hover:bg-white px-4 py-1 rounded-sm shadow-lg mt-4">
            View <BsArrowRight className="ml-2" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
