import Image from "next/image";
import React from "react";
import githubLogo from "@/../public/github_logo.svg";

const FooterBottom = () => {
  return (
    <div className="w-2/3 rounded bg-secondary-bg text-center text-white flex flex-col justify-center mx-auto py-2 items-center">
      <a
        href="https://github.com/houseofgeeks/hgv2"
        className="text-center text-xs xs:text-sm sm:text-base font-light"
      >
        View Source Code on{" "}
        <Image className="inline px-1 h-6 w-6" src={githubLogo} alt="" /> Github
      </a>
    </div>
  );
};

export default FooterBottom;
