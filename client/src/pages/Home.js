import Rightbar from "../components/home/Rightbar";
import YourActivity from "../components/home/YourActivity";

const Home = () => {
  return (
    <div className="px-24 min-h-[100vh] py-5 bg-[#010203]">
      <div className='flex'>
        <YourActivity />
        <Rightbar />
      </div>
    </div>
  );
};
export default Home;
