import hgLogo from "../assets/hg_logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const Navbar = ({ pathname }) => {
  
  return (
    <div className="bg-[#010203] h-[70px] relative px-24 py-4">
      <div className="flex justify-between items-center h-full">
        <div>
          <img className="max-w-[70px]" src={hgLogo} alt="" />
        </div>
        <ul className="flex items-center">
          <li
            className={`text-white  text-lg mx-4 ${
              pathname === "/" && "underline"
            } ${pathname === "/" && "decoration-[#EE2A7B]"} underline-offset-4`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`text-slate-100 ${
              pathname.split('/')[1] === "resources" && "underline"
            } ${
              pathname.split('/')[1] === "resources" && "decoration-[#EE2A7B]"
            } text-lg mx-4 underline-offset-4`}
          >
            <Link to="/resources">Resources</Link>
          </li>
          <li className="text-slate-100  text-lg mx-4">
            <Link to="/">Projects</Link>
          </li>
          <li className="text-slate-100  text-lg mx-4">
            <Link to="/">Blogs</Link>
          </li>
          <li className={`text-slate-100 ${
              pathname.split('/')[1] === "about" && "underline"
            } ${
              pathname.split('/')[1] === "about" && "decoration-[#EE2A7B]"
            } text-lg mx-4 underline-offset-4`}
            >
            <Link to="/about">About</Link>
          </li>
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
