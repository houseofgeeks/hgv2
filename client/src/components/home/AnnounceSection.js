import { GoArrowUp } from "react-icons/go";
const AnnounceSection = ({ feed }) => {
  return (
    <div className="flex items-center my-3">
      <div className="w-9 h-9 rounded-full bg-slate-100"></div>
      <div className="max-w-[90%] ml-5">
        <p className=" text-slate-100">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          excepturi rem, similique harum dolore ipsa officia deleniti.
          Consequatur, commodi possimus!
        </p>
        {feed && (
          <>
            <div className="flex items-center text-white mt-3">
              <GoArrowUp />
              <p className="ml-2">25</p>
            </div>
            <hr className="mt-2 border-[#2B2B2B] border" />
          </>
        )}
      </div>
    </div>
  );
};
export default AnnounceSection;
