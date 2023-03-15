import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const LevelTrack = ({ items }) => {
  // console.log(items)
  
  const checkList = items.map((item, index) => {
    return(
      <>
      <div className="pt-[10px]">
        <div className="bg-[#010203] py-[8px] px-[8px] flex justify-between item-center cursor-pointer">
          <li key={index} className="flex items-center">
          <input id={`checkbox-${index}`} type="checkbox" className="h-5 w-5 rounded accent-green-700  fill-cyan-500" />
          <label htmlFor={`checkbox-${index}`} className="ml-2 block">{item}</label>
          </li>
          <li key={index}>
                  <Link to="/" className="underline px-2 mx-auto">
                    Watch-1
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link> <span> | </span> 
                  <Link to="/" className="underline px-2 mx-auto">
                    Watch-2
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link> <span> | </span> 
                  <Link to="/" className="underline px-2 mx-auto">
                    Watch-3
                    <FiArrowUpRight className="text-white inline text-[12px] ml-[2px] mb-[3px]" />
                  </Link>
                {/* </span>
      </span> */}
      </li>
        </div>
      </div>
      </>
    ) 
  });

    
  return (
    <div>
      <ul>{checkList} </ul>
      
      
               
          
    </div>
    
  );
};

export default LevelTrack;
