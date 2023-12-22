import YourActivity from "./YourActivity";
import Rightbar from "./Rightbar";

const Home = () => {
  return (
    <div className="px-8 sm:px-10 md:px-24 min-h-[100vh] py-5 bg-[#010203]">
      <div className="flex sm:flex-row flex-col-reverse">
        <YourActivity />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
