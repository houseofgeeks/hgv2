import BlogCard from "./BlogCard";
import { blogData } from "@/utils";

const ProfileBlogs = () => {
  return (
    <div className="bg-secondary-bg space-y-6 px-10 py-6 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold">Blogs</h2>
      <div className="flex flex-col sm:flex-row w-full space-y-8 sm:space-y-0 sm:space-x-6 justify-between items-center">
        {blogData.map((item, index) => {
          return <BlogCard key={index} item={item} />;
        })}
      </div>
      <button className="border rounded-sm w-full py-3 text-base xs:text-lg hover:bg-primary-color hover:border-primary-color cursor-pointer">
        Show More
      </button>
    </div>
  );
};

export default ProfileBlogs;
