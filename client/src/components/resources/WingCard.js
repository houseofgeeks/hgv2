import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const WingCard = ({ title, description, image, url }) => {
  return (
    <div className="first:mt-0 my-3 xs:my-0">
      <img src={image} alt={title} className="w-full" />
      <h1 className="font-normal text-xl my-2">{title}</h1>
      <p className="text-md text-slate-200 font-light line-clamp-3">
        {description}
      </p>
      <p className="mt-5 text-pink-600 underline decoration-pink-600 underline-offset-4">
        <Link to={url}>
          Start this track
          <HiArrowLongRight className="inline text-lg ml-2" />
        </Link>
      </p>
    </div>
  );
};

export default WingCard;
