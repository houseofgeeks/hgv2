import { GoArrowUp } from "react-icons/go";
const AnnounceSection = ({ feed,items }) => {
  return (
    <div className="flex items-center my-4">
      <div className="w-9 h-9 rounded-full relative bg-slate-100">
        <img src={items.user.image} className='w-full h-full object-cover rounded-full' alt="" />
      </div>
      <div className="w-[100%] ml-5">
        {
          feed ? <p className=" text-slate-100">
          {items.feedDetails}
        </p> : <p className=" text-slate-100">
          {items.announcementDetails}
        </p>
        }
        {feed && (
          <>
            <div className="flex items-center text-white mt-1">
              <GoArrowUp />
              <p className="ml-2">{items.upVotes.length}</p>
            </div>
            <hr className="mt-2 border-[#2B2B2B] border" />
          </>
        )}
      </div>
    </div>
  );
};
export default AnnounceSection;
