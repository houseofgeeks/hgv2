import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import badge from '../../assets/badge.svg'
import demo from '../../assets/demo_project.svg'
const YourActivity = () => {
  const [codeForcesRating, setCodeForcesRating] = useState("");
  const [leetCodeSolved, setLeetCodeSolved] = useState("");

  const fetchLeetCode = async () => {
    const { data } = await axios.get(
      "https://leetcode-stats-api.herokuapp.com/sudhanshu__mittal"
    );
    setLeetCodeSolved(data.totalSolved);
  };

  const fetchCodeforces = async () => {
    const { data } = await axios.get(
      "https://codeforces.com/api/user.info?handles=sudhanshu._mittal"
    );
    setCodeForcesRating(data.result[0].rating);
  };
  useEffect(() => {
    fetchLeetCode();
    fetchCodeforces();
  }, []);

  return (
    <div className="flex-[0.25] text-white bg-[#0F1010] h-[550px] rounded-lg p-4">
      <h1 className="text-slate-300 text-xl">Your Activity</h1>

      <h2 className="font-bold text-lg mt-6">Problems Solved</h2>
      <div className="flex justify-around mt-4">
        <div className="bg-[#0A0A0B] w-[100px] h-[100px] rounded-lg flex justify-center items-center flex-col">
          <p className="text-4xl text-[#3466F6]">{leetCodeSolved}</p>
          <Link to={"/"} className="underline underline-offset-2">
            Leetcode
          </Link>
        </div>
        <div className="bg-[#0A0A0B] w-[100px] h-[100px] rounded-lg flex justify-center items-center flex-col">
          <p className="text-4xl text-[#3466F6]">{codeForcesRating}</p>
          <Link to={"/"} className="underline underline-offset-2">
            CodeForces
          </Link>
        </div>
      </div>

      <h2 className="font-bold text-lg mt-8">Skill Badge</h2>
      <div className="flex justify-around mt-2">
        {
          [1,2,3].map((items)=>{
            return(
              <img src={badge} alt="" />
            )
          })
        }
      </div>
      <h2 className="font-bold text-lg mt-8">Projects</h2>
        <div className="mt-2 flex items-center">
          <img src={demo} alt="" />
          <div className="ml-4">
            <p>Load balancer</p>
            <div className="flex">
              <p className="text-sm bg-[#0A0A0B] p-1 mx-2 rounded-lg">SDE</p>
              <p className="text-sm bg-[#0A0A0B] p-1 mx-2 rounded-lg">AI/ML</p>
            </div>
          </div>
        </div>
    </div>
  );
};
export default YourActivity;
