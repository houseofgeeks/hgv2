import Announcements from "./Announcements";
import axios from "axios";
import { useEffect, useState } from "react";
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
    setFeeds(data);
  };
  useEffect(() => {
    fetchAnnouncements();
    fetchFeeds();
  }, []);

  return (
    <div className="flex-[0.75]">
      <div>
        <Announcements details={announcements} />
        <Announcements feed={feeds} />
      </div>
    </div>
  );
};
export default Rightbar;
