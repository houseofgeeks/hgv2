import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import LevelTrackItems from "./LevelTrackItems";
import { Collapse } from "react-collapse";
import { useState } from "react";

const LevelTrack = ({ index,title,items}) => {

  const [open,setOpen]= useState("false");

  return (
    <>
    <div className="pt-[10px]">
      <div className="bg-[#131414] py-[20px] px-[50px] flex justify-between item-center cursor-pointer" onClick={()=>{setOpen(!open)}}>
        <p className="text-[22px] font-semibold">{title}</p>
        <div className="text-[30px] bg-[#010203]">
          {!open ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </div>
      </div>

      <Collapse isOpened={!open}>
        <div className="bg-[#131414] px-[50px] pb-[20px]"><LevelTrackItems items={items} /></div>
      </Collapse>
    </div>
        
    </>
    // bg-[#010203] - black
  );
};

export default LevelTrack;
