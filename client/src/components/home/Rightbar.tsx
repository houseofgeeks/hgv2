import Announcements from "./Announcements";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchAnnouncements, fetchFeeds } from "../../redux/features/homeSlice";
import Loader from "../loader/Loader";

interface RightbarProps {
  announcements?: string;  // it will be an array added string for now
  feeds?: string; // it will be an array added string for now
  loading: boolean;
  error: any;
}

const Rightbar = () => {
  //   const {
  //     announcements,
  //     feeds,
  //     loading,
  //     // error
  //   } = useSelector((state) => state.home);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchAnnouncements());
  //     dispatch(fetchFeeds());
  //   }, [dispatch]);

  //   if (loading) {
  //     return (
  //       // <div class="w-60 h-24 border-2 rounded-md mx-auto mt-20">
  //       //   <div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
  //       //     <div class="w-12 bg-gray-300 h-12 rounded-full "></div>
  //       //     <div class="flex flex-col space-y-3">
  //       //       <div class="w-36 bg-gray-300 h-6 rounded-md "></div>
  //       //       <div class="w-24 bg-gray-300 h-6 rounded-md "></div>
  //       //     </div>
  //       //   </div>
  //       // </div>
  //       // <div>Loading...</div>
  //       <Loader />
  //     );
  //   }

  return (
    <div className="flex-[0.75] mt-8 sm:mt-0">
      <div>
        <Announcements details={["announcement1", "announcement2"]} />
        <Announcements feeds={["feed1", "feed2"]} />
      </div>
    </div>
  );
};

export default Rightbar;
