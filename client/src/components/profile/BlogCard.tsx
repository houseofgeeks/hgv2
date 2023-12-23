import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  img: StaticImageData;
  title: String;
  description: String;
}

interface ContestRatingProps<T> {
  item: T;
}

const BlogCard: React.FC<ContestRatingProps<Props>> = ({ item }) => {
  return (
    <div className="flex flex-col items-start space-y-4 mb-8 ss:mb-0">
      <Image
        className="h-48 xs:h-56 sm:h-72 rounded-md object-cover mx-auto"
        src={item.img}
        alt=""
      />
      <div className="space-y-3">
        <h2 className="font-medium text-lg xs:text-2xl">
          {item.title.slice(0, 26)}...
        </h2>
        <p className="font-light text-sm xs:text-base">{item.description}</p>
      </div>
      <button className="flex items-center space-x-1">
        <Link href={"/"}>
          <p className="hover:underline text-sm xs:text-base text-primary-color underline-offset-2">
            Click to View
          </p>
        </Link>
        <BsArrowRight className="text-primary-color" />
      </button>
    </div>
  );
};

export default BlogCard;
