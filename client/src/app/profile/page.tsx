import React from "react";
import MainProfile from "@/components/profile/MainProfile";
import ContestRating from "@/components/profile/ContestRating";
import ProfileProjects from "@/components/profile/ProfileProjects";
import ProfileBlogs from "@/components/profile/ProfileBlogs";

const page = () => {
  return (
    <div className="px-12 py-8 space-y-8">
      <MainProfile />
      <ContestRating />
      <ProfileProjects />
      <ProfileBlogs />
    </div>
  );
};

export default page;
