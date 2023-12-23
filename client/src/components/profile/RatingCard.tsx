import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

interface Props {
  name: String;
  rating: number;
  problemSolved: number;
  contest: number;
}

interface ContestRatingProps<T> {
  item: T;
}

const RatingCard: React.FC<ContestRatingProps<Props>> = ({ item }) => {
  return (
    <div className="px-2 py-4">
      <Link
        href={`https://${item.name}.com`}
        target="_blank"
        className="underline underline-offset-2 inline-flex items-center font-semibold text-lg ss:text-2xl"
      >
        {item.name}
        <BsArrowUpRight className="ml-1 text-xs" />
      </Link>
      <div className="mt-5 flex items-center">
        <div className="w-24 h-16 ss:w-28 ss:h-20 rounded-md flex items-center flex-col justify-center bg-secondary-bg">
          <h2 className="font-semibold text-lg ss:text-2xl">{item.rating}</h2>
          <p className="text-xs ss:text-sm font-light">Rating</p>
        </div>
        <div className="w-24 h-16 ss:w-28 ss:h-20 rounded-md mx-4 flex items-center flex-col justify-center bg-secondary-bg">
          <h2 className="font-semibold text-lg ss:text-2xl">
            {item.problemSolved}
          </h2>
          <p className="text-xs ss:text-sm font-light">Problem Solved</p>
        </div>
        <div className="w-24 h-16 ss:w-28 ss:h-20 rounded-md flex items-center flex-col justify-center bg-secondary-bg">
          <h2 className="font-semibold text-lg ss:text-2xl">{item.contest}</h2>
          <p className="text-xs ss:text-sm font-light">Contest Attended</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
