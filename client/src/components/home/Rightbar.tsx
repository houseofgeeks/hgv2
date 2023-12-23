import { details, feeds } from "@/utils";
import Announcements from "./Announcements";

interface RightbarProps {
  announcements?: string; // it will be an array added string for now
  feeds?: string; // it will be an array added string for now
  loading: boolean;
  error: any;
}

const Rightbar = () => {
  return (
    <div className="flex-[0.75] mt-8 sm:mt-0">
      <div>
        <Announcements details={details} />
        <Announcements feeds={feeds} />
      </div>
    </div>
  );
};

export default Rightbar;
