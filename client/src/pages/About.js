import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWingsData } from "../redux/features/aboutSlice";
import Main from "../components/about/Main";
import WingsBrief from "../components/about/WingsBrief";
import Loader from "../components/loader/Loader";

const About = () => {
  const { 
    wingsData, 
    loading, 
    // error 
  } = useSelector((state) => state.about);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWingsData());
  }, [dispatch]);
  console.log(loading)

  if (loading) {
    return <Loader />;
  }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="px-12 ss:px-24 min-h-[90vh] text-white py-5 bg-[#010203]">
      <Main />
      {console.log(wingsData)}
      <WingsBrief wingsData={wingsData} />
    </div>
  );
};

export default About;
