import React from "react";
import banner1 from "../../assets/profile/blogBanner1.svg";
import banner2 from "../../assets/profile/blogBanner2.svg";
import banner3 from "../../assets/profile/blogBanner3.svg";
import BlogCard from "./BlogCard";
const ProfileBlogs = () => {
  const blogData = [
    {
      img: banner1,
      title: "Figma Basic Tools Guide",
      description:
        "In this blog, I'd cover some basic tools of figma to get started with UI Designer",
    },
    {
      img: banner2,
      title: "Learn Adobe Xd in 2023 for absolute beginerrs",
      description:
        "In this blog, I'd cover some basic tools of figma to get started with UI Designer",
    },
    {
      img: banner3,
      title: "Adobe illustrator Hidden Features",
      description:
        "In this blog, I'd cover some basic tools of figma to get started with UI Designer",
    },
  ];
  return (
    <div className="bg-[#131414] px-10 py-6 rounded-sm mt-8">
      <h2 className="text-2xl font-bold text-white">Blogs</h2>
      <div className="mt-6 flex w-[100%] justify-between items-center">
        {blogData.map((item) => {
          return <BlogCard item={item} />;
        })}
      </div>
      <button className="mt-6 border border-white w-[100%] py-3 text-white text-lg">
        Show More
      </button>
    </div>
  );
};

export default ProfileBlogs;
