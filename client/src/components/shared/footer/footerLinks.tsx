import React from "react";
import { footer } from "@/utils";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const FooterLinks = () => {
  return (
    <div className="flex pl-12 space-x-4 xs:pl-20">
      {footer.map((section, index) => (
        <div className="w-1/2" key={index}>
          <h1 className="text-base xs:text-lg lg:text-xl font-semibold text-slate-300">
            {section.title}
          </h1>
          <ul className="items-center space-y-3 mt-4">
            {section.links.map((link, linkIndex) => (
              <li
                key={linkIndex}
                className="text-white text-xs xs:text-sm md:text-base font-thin cursor-pointer w-fit hover:font-normal"
              >
                <Link href={link.link}>
                  {link.name}
                  <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
