import Announcements from "./Announcements";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnnouncements, fetchFeeds } from "../../redux/features/homeSlice";
import Loader from "../loader/Loader";

const Rightbar = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [feeds, setFeeds] = useState([]);

  const fetchAnnouncements = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/api/announcements/all`
    );
    setAnnouncements(data);
  };

  const fetchFeeds = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/api/feeds/all`
    );
    setFeeds(data.feeds);
  };
  useEffect(() => {
    dispatch(fetchAnnouncements());
    dispatch(fetchFeeds());
  }, [dispatch]);

  if (loading) {
    return (
      // <div class="w-60 h-24 border-2 rounded-md mx-auto mt-20">
      //   <div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
      //     <div class="w-12 bg-gray-300 h-12 rounded-full "></div>
      //     <div class="flex flex-col space-y-3">
      //       <div class="w-36 bg-gray-300 h-6 rounded-md "></div>
      //       <div class="w-24 bg-gray-300 h-6 rounded-md "></div>
      //     </div>
      //   </div>
      // </div>
      // <div>Loading...</div>
      <Loader />
    );
  }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="flex-[0.75] mt-8 sm:mt-0">
      <div>
        <Announcements details={announcements} />
        <Announcements feeds={feeds.feeds} />
      </div>
    </div>
  );
};
export default Rightbar;
