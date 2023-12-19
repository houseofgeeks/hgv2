// import { useSelector, useDispatch } from "react-redux";
// import { fetchLeetCode, fetchCodeforces } from "../../redux/features/ratingsSlice";
import { useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const YourActivity = () => {
  //   const { leetCodeSolved, codeForcesRating } = useSelector((state) => state.ratings);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchLeetCode());
  //     dispatch(fetchCodeforces());
  //   }, [dispatch]);

  return (
    <div className="flex-[0.25] text-white bg-[#0F1010] xs:h-[550px] rounded-lg p-5">
      <h1 className="text-slate-300 text-base xs:text-xl">Your Activity</h1>

      <h2 className="font-bold text-sm xs:text-lg mt-6">Problems Solved</h2>
      <div className="flex justify-around mt-4">
        <div className="bg-[#0A0A0B] w-24 h-24 xs:w-[100px] xs:h-[100px] rounded-lg flex justify-center items-center flex-col">
          <p className="text-2xl xs:text-4xl text-[#3466F6]">
            0
          </p>
          <Link
            href={"/"}
            className="underline flex items-center underline-offset-2"
          >
            <p className="text-sm">Leetcode</p>{" "}
            <BsArrowUpRight className="text-xs" />
          </Link>
        </div>
        <div className="bg-[#0A0A0B] w-24 h-24 xs:w-[100px] xs:h-[100px] rounded-lg flex justify-center items-center flex-col">
          <p className="text-2xl xs:text-4xl text-[#3466F6]">
            933
          </p>
          <Link
            href={"/"}
            className="underline flex items-center underline-offset-2"
          >
            <p className="text-sm">CodeForces</p>{" "}
            <BsArrowUpRight className="text-xs" />
          </Link>
        </div>
      </div>

      <h2 className="font-bold text-sm xs:text-lg mt-8">Skill Badge</h2>
      <div className="flex justify-around mt-2">
        {[1, 2, 3].map((items,index) => {
          return <Image key={index} src="/assets/badge.svg" alt="" width={100} height={100} />
        })}
      </div>
      <h2 className="font-bold text-sm xs:text-lg mt-8">Projects</h2>
      <div className="xs:mt-2 mt-4 flex items-center">
        <Image src='/assets/demo_project.svg' alt="" height={50} width={50} />
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
