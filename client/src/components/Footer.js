import hgLogo from "../assets/hg_logo.svg";
import iiitrLogo from "../assets/iiitr_logo.svg";
import ss from "../assets/ss.png";
import ab from "../assets/ab.png";
import { BsArrowUpRight } from "react-icons/bs";
import githubLogo from "../assets/github_logo.svg";

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
              <a href="/">
                <img
                  className="max-w-[50px] px-2 inline"
                  src={iiitrLogo}
                  alt=""
                />
                <span className="hidden sm:inline text-sm md:text-base">
                  IIIT Ranchi Official Website
                </span>
                <BsArrowUpRight className="text-white xl:inline text-sm ml-2 font-bold hidden" />
              </a>
            </div>
            <div className="bt2 text-center py-2 px-4 rounded-md">
              <a href="/">
                <img
                  className="max-w-[50px] px-2 inline"
                  src={iiitrLogo}
                  alt=""
                />
                <span className="hidden sm:inline text-sm md:text-base">
                  Join our Slack Community
                </span>
                <BsArrowUpRight className="text-white xl:inline text-sm ml-2 font-bold hidden" />
              </a>
            </div>
          </div>
          <div className="sm:flex mt-12">
            <div className="w-1/2">
              <h1 className="text-xl font-semibold text-slate-300">Navigation</h1>
              <ul className="items-center space-y-3 mt-4">
                <li className="text-white text-base font-thin cursor-pointer">
                  <a href="/">
                    Home
                    <BsArrowUpRight className="text-white inline text-[12px] pl-1" />
                  </a>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <a href="/">
                    Resources
                    <BsArrowUpRight className="text-white inline text-[12px] pl-1" />
                  </a>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <a href="/">
                    Projects
                    <BsArrowUpRight className="text-white inline text-[12px] pl-1" />
                  </a>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <a href="/">
                    Blogs
                    <BsArrowUpRight className="text-white inline text-[12px] pl-1" />
                  </a>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <a href="/">
                    About
                    <BsArrowUpRight className="text-white inline text-[12px] pl-1" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 mt-16 sm:mt-0">
              <h1 className="text-xl font-semibold text-slate-300">Socials</h1>
              <ul className="items-center space-y-3 mt-4">
                <li className="text-white text-base font-thin cursor-pointer">
                  <a href="/">
                    Instagram
                    <BsArrowUpRight className="text-white inline text-[12px] pl-1" />
                  </a>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <a href="/">
                    LinkedIn
                    <BsArrowUpRight className="text-white inline text-[12px] pl-1" />
                  </a>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <a href="/">
                    Twitter
                    <BsArrowUpRight className="text-white inline text-[12px] pl-1" />
                  </a>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <a href="/">
                    Facebook
                    <BsArrowUpRight className="text-white inline text-[12px] pl-1" />
                  </a>
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