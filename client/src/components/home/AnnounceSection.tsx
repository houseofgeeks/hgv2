import { GoArrowUp } from "react-icons/go";

interface AnnounceSectionProps {
  feed?: any;
  items: any;
}

const AnnounceSection = ({ feed, items }: AnnounceSectionProps) => {
  return (
    <div className="flex items-center my-4">
      <div className="w-12 h-9 rounded-full relative bg-slate-100 -z-0">
        <img src={items?.user?.image} className='w-full h-full object-cover rounded-full' alt="" />
      </div>
      <div className="w-[100%] ml-5 text-xs xs:text-base">
        {
          feed ? <p className=" text-slate-100">
          {items?.feedDetails}
        </p> : <p className=" text-slate-100">
          {items?.announcementDetails}
        </p>
        }
        {feed && (
          <>
            <div className="flex items-center text-white mt-1">
              <GoArrowUp />
              <p className="ml-2">{items?.upVotes?.length}</p>
            </div>
            <hr className="mt-2 border-[#2B2B2B] border" />
          </>
        )}
      </div>
    </div>
  );
};
export default AnnounceSection;
