import YourActivity from "@/components/home/YourActivity";
import Rightbar from "@/components/home/Rightbar";

const Home = () => {
  return (
    <div className="px-8 sm:px-10 md:px-24 min-h-[100vh] py-5">
      <div className="flex sm:flex-row flex-col">
        <YourActivity />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
