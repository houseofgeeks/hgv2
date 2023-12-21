import { BiSolidUpvote } from "react-icons/bi";
import Image from "next/image";

interface AnnounceSectionProps {
  feed?: any;
  items: any;
}

const AnnounceSection = ({ feed, items }: AnnounceSectionProps) => {
  return (
    <div className="flex items-center my-4">
      <div className="relative h-[36px] w-[36px] rounded-full -z-0">
        <Image fill src={"/profile-demo.svg"} className="rounded-full" alt="" />
      </div>
      <div className="w-[100%] ml-5 text-xs xs:text-base">
        {feed ? (
          <div>
            <p className=" text-slate-100">{items?.feedDetails}</p>
            <div className="flex items-center text-white mt-1 justify-between">
              <div className="flex items-center justify-center">
                <BiSolidUpvote className="cursor-pointer" />
                <p className="ml-2">{items?.upVotes?.length}</p>
              </div>
              <span className="text-xs text-gray-300">12/12/23</span>
            </div>
            <hr className="mt-2 border-[#2B2B2B]" />
          </div>
        ) : (
          <div className="flex justify-between items-end gap-1">
            <p className=" text-slate-100">{items?.announcementDetails}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnounceSection;
