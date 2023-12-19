import Image from 'next/image';
import hgLogo from "../../../../public/hg_logo.svg";

const FooterHeroSection = () => {
  return (
    <div className="px-8 inline">
      <div className="flex flex-col justify-center pr-8 xs:px-0">
        <Image
          className="max-w-[75px] xs:max-w-[100px] lg:max-w-[120px] w-32"
          src={hgLogo}
          alt=""
        />
        <div className="hg text-lg xs:text-3xl pt-1 pl-1 text-left">
          House of Geeks
        </div>
      </div>
      <div className="max-w-sm">
        <div className="mt-4 xs:mt-8 text-xs xs:text-sm">
          “It is only when they go wrong that machines remind you how powerful
          they are.”
        </div>
        <div className="float-right text-xs xs:text-sm italic pr-2">
          -Baba Ranchordas
        </div>
      </div>
    </div>
  );
}

export default FooterHeroSection