import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#0A0A0B] text-white">
      <div className="xs:flex">
        <div className="py-16 px-6 xs:px-12 ss:px-24 xs:w-1/2 flex xs:inline">
          <div className="flex flex-col justify-center pr-8 xs:px-0">
            <Image
              height={120}
              width={120}
              className="max-w-[60px] xs:max-w-[120px] pl-2"
              src="/assets/hg_logo.svg"
              alt=""
            />
            <div className="hg text-base xs:text-2xl pt-1 text-center xs:text-left">
              House of Geeks
            </div>
          </div>
          <div className="max-w-sm">
            <div className="mt-8  xs:text-base text-xs">
              “It is only when they go wrong that machines remind you how
              powerful they are.”
            </div>
            <div className="float-right text-xs xs:text-sm italic pr-6">
              -Baba Ranchordas
            </div>
          </div>
          <div className="xs:flex mt-20 space-x-16 hidden">
            <div className="lead">
              <Image
                height={100}
                width={100}
                src="/assets/ss.png"
                className="max-w-[70px]"
                alt=""
              />
              <div className="text-sm pt-1">Shubham Kushwaha</div>
              <div className="text-xs font-thin pt-1">Technical Head, HG</div>
            </div>
            <div className="co-lead">
              <Image
                height={100}
                width={100}
                src="/assets/ab.png"
                className="max-w-[70px]"
                alt=""
              />
              <div className="text-sm pt-1">Anish Bharadwaj</div>
              <div className="text-xs font-thin pt-1">Joint Secretary, HG</div>
            </div>
          </div>
        </div>
        <div className="xs:w-1/2 px-12 pb-8 xs:p-20">
          <div className="flex flex-col justify-center space-y-8 lg:w-3/5 w-3/4">
            <div className="bt1 text-center py-2 px-4 rounded-md">
              <Link href="http://iiitranchi.ac.in/" target="_blank">
                <Image
                  height={50}
                  width={50}
                  className="max-w-[50px] px-2 inline"
                  src="/assets/iiitr_logo.svg"
                  alt=""
                />
                <span className="hidden sm:inline text-sm md:text-base">
                  IIIT Ranchi Official Website
                </span>
                <FiArrowUpRight className="text-white xl:inline text-base ml-1 mb-1 font-bold hidden" />
              </Link>
            </div>
            <div className="bt2 text-center py-2 px-4 rounded-md">
              <Link href="/" target="_blank">
                <Image
                  height={50}
                  width={50}
                  className="max-w-[50px] px-2 inline"
                  src="/assets/slack_logo.svg"
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
                  <Link href="/">
                    Home
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link href="/">
                    Resources
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link href="/">
                    Projects
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link href="/">
                    Blogs
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link href="/">
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
                  <Link href="/">
                    Instagram
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link href="/">
                    LinkedIn
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link href="/">
                    Twitter
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                </li>
                <li className="text-white text-base font-thin cursor-pointer">
                  <Link href="/">
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
          <Image
            height={10}
            width={10}
            className="inline px-1 h-6 w-6"
            src="/assets/github_logo.svg"
            alt=""
          />{" "}
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
