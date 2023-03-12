import hgLogo from "../assets/hg_logo.svg";
import iiitrLogo from "../assets/iiitr_logo.svg";
import slackLogo from "../assets/slack_logo.svg";
import ss from "../assets/ss.png";
import ab from "../assets/ab.png";
import { FiArrowUpRight } from "react-icons/fi";
import githubLogo from "../assets/github_logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0A0A0B] text-white">
      <div className="xs:flex">
        <div className="py-16 px-24 w-1/2">
          <div className="flex flex-col justify-center">
            <img className="max-w-[120px] pl-2" src={hgLogo} alt="" />
            <div className="hg text-2xl pt-1">House of Geeks</div>
          </div>
          <div className="max-w-sm">
            <div className="mt-8 text-base ">
              “It is only when they go wrong that machines remind you how
              powerful they are.”
            </div>
            <div className="float-right text-sm italic pr-6">
              -Baba Ranchordas
            </div>
          </div>
          <div className="flex mt-20 space-x-16">
            <div className="lead">
              <img src={ss} className="max-w-[70px]" alt="" />
              <div className="text-sm pt-1">Shubham Kushwaha</div>
              <div className="text-xs font-thin pt-1">Technical Head, HG</div>
            </div>
            <div className="co-lead">
              <img src={ab} className="max-w-[70px]" alt="" />
              <div className="text-sm pt-1">Anish Bharadwaj</div>
              <div className="text-xs font-thin pt-1">Joint Secretary, HG</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-20">
          <div className="flex flex-col justify-center space-y-8 lg:w-3/5 w-3/4">
            <div className="bt1 text-center py-2 px-4 rounded-md">
              <Link to="http://iiitranchi.ac.in/" target="_blank">
                <img
                  className="max-w-[50px] px-2 inline"
                  src={iiitrLogo}
                  alt=""
                />
                <span className="hidden sm:inline text-sm md:text-base">
                  IIIT Ranchi Official Website
                </span>
                <FiArrowUpRight className="text-white xl:inline text-base ml-1 mb-1 font-bold hidden" />
              </Link>
            </div>
            <div className="bt2 text-center py-2 px-4 rounded-md">
              <Link to="/" target="_blank">
                <img
                  className="max-w-[50px] px-2 inline"
                  src={slackLogo}
                  alt=""
                />
                <span className="hidden sm:inline text-sm md:text-base">
                  Join our Slack Community
                </span>
                <FiArrowUpRight className="text-white xl:inline text-base ml-1 mb-1 font-bold hidden" />
              </Link>
            </div>
          </div>
          <div className="sm:flex mt-12">
            <div className="w-1/2">
              <h1 className="text-xl font-semibold text-slate-300">
                Navigation
              </h1>
              <ul className="items-center space-y-3 mt-4">
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link to="/">
                    Home
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link to="/">
                    Resources
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link to="/">
                    Projects
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link to="/">
                    Blogs
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link to="/">
                    About
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 mt-16 sm:mt-0">
              <h1 className="text-xl font-semibold text-slate-300">Socials</h1>
              <ul className="items-center space-y-3 mt-4">
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link to="/">
                    Instagram
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link to="/">
                    LinkedIn
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link to="/">
                    Twitter
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link to="/">
                    Facebook
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 rounded bg-[#131414] text-center text-white flex flex-col justify-center mx-auto py-2 items-center">
        <a
          href="https://github.com/houseofgeeks/hgv2"
          className="text-center text-base font-light"
        >
          View Source Code on
          <img className="inline px-1 h-6 w-6" src={githubLogo} alt="" /> Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
