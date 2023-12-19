import React from 'react'
import { footerButtons } from "../../../utils/data";
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

const FooterButtons = () => {
  return (
    <div className="hidden md:flex flex-col space-y-8 sm:w-3/4 mx-auto">
      {footerButtons.map((button, index) => (
        <div
          key={index}
          className={`${button.bg} px-4 py-2 lg:px-5 rounded-md w-fit hover:opacity-90`}
        >
          <Link href={button.link} target="_blank">
            <Image
              className="lg:max-w-[40px] max-w-[30px] pr-3 inline"
              src={button.logo}
              alt=""
            />
            <span className="inline text-sm lg:text-base">{button.name}</span>
            <FiArrowUpRight className="text-white lg:inline text-base ml-1 mb-1 font-bold ss:hidden" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default FooterButtons