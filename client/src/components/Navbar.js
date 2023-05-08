import hgLogo from "../assets/hg_logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = ({ pathname }) => {
  return (
    <div className="bg-[#010203] h-[75px] sticky top-0 z-100 ss:h-[70px] ss:relative px-12 md:px-24 pt-4 pb-8 ss:py-4">
      <div className="flex justify-between items-center ss:hidden">
          <div>
           <RxHamburgerMenu
                className="text-white cursor-pointer fixed"
                size={24}
              />
          </div>   
        {/* <div className="drawer z-10 pt-4">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer">
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay -z-0"></label>
            <ul className="menu p-4 w-2/5 bg-zinc-900 rounded-md text-base-content">
              <li
                className={`text-white text-lg mx-4 ${
                  pathname === "/" && "underline decoration-[#EE2A7B]"
                } underline-offset-4`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`text-slate-100 ${
                  pathname.includes("resources") &&
                  "underline decoration-[#EE2A7B]"
                } text-lg mx-4 underline-offset-4`}
              >
                <Link to="/resources">Resources</Link>
              </li>
              <li
                className={`text-slate-100 ${
                  pathname.includes("projects") &&
                  "underline decoration-[#EE2A7B]"
                } text-lg mx-4 underline-offset-4`}
              >
                <Link to="/projects">Projects</Link>
              </li>
              <li className="text-slate-100  text-lg mx-4">
                <Link to="/">Blogs</Link>
              </li>
              <li
                className={`text-slate-100 ${
                  pathname.includes("about") && "underline decoration-[#EE2A7B]"
                } text-lg mx-4 underline-offset-4`}
              >
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="">
          <img className="max-w-[70px]" src={hgLogo} alt="" />
        </div>
        <div className="">
          <Link to={"/profile"}>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-slate-300"></div>
              <p className="text-white mx-2">HgV2</p>
              <IoIosArrowDown className="text-white" />
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden ss:flex justify-between items-center h-full">
        <div>
          <img className="max-w-[70px]" src={hgLogo} alt="" />
        </div>
        <ul className="flex items-center">
          <li
            className={`text-white  text-lg mx-4 ${
              pathname === "/" && "underline decoration-[#EE2A7B]"
            } underline-offset-4`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`text-slate-100 ${
              pathname.includes("resources") && "underline decoration-[#EE2A7B]"
            } text-lg mx-4 underline-offset-4`}
          >
            <Link to="/resources">Resources</Link>
          </li>
          <li
            className={`text-slate-100 ${
              pathname.includes("projects") && "underline decoration-[#EE2A7B]"
            } text-lg mx-4 underline-offset-4`}
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li className="text-slate-100  text-lg mx-4">
            <Link to="/">Blogs</Link>
          </li>
          <li
            className={`text-slate-100 ${
              pathname.includes("about") && "underline decoration-[#EE2A7B]"
            } text-lg mx-4 underline-offset-4`}
          >
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Link to={"/profile"}>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-slate-300"></div>
            <p className="text-white mx-2">HgV2</p>
            <IoIosArrowDown className="text-white" />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
