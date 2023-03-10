import hgLogo from "../assets/hg_logo.svg";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="bg-[#010203] h-[70px] relative px-24 py-4">
      <div className="flex justify-between items-center h-full">
        <div>
          <img className="max-w-[70px]" src={hgLogo} alt="" />
        </div>
        <ul className="flex items-center">
          <li className="text-white  text-lg mx-4 underline decoration-[#EE2A7B] underline-offset-4">
            Home
          </li>
          <li className="text-slate-100  text-lg mx-4">Resources</li>
          <li className="text-slate-100  text-lg mx-4">Projects</li>
          <li className="text-slate-100  text-lg mx-4">Blogs</li>
          <li className="text-slate-100  text-lg mx-4">About</li>
        </ul>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-slate-300"></div>
          <p className="text-white mx-2">HgV2</p>
          <IoIosArrowDown className="text-white" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
