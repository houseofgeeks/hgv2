import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import LevelTrackItems from "./LevelTrackItems";
import { Collapse } from "react-collapse";
import { useState } from "react";

const LevelTrack = ({ index,title,items}) => {

  const [open,setOpen]= useState("false");

  return (
    <>
    <div className="pt-[10px]">
      <div className="bg-[#131414] xs:py-[20px] xs:px-[50px] px-4 py-2 flex justify-between item-center cursor-pointer" onClick={()=>{setOpen(!open)}}>
        <p className="xs:text-[22px] text-base font-semibold">{title}</p>
        <div className="xs:text-[30px] text-base">
          {!open ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </div>
      </div>

      <Collapse isOpened={!open}>
        <div className="bg-[#131414] xs:px-[50px] px-8 pb-[20px]"><LevelTrackItems items={items} /></div>
      </Collapse>
    </div>
        
    </>
    // bg-[#010203] - black
  );
};

export default LevelTrack;
