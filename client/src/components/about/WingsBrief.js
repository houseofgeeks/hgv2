import React, { useState } from 'react'
import WingDesc from './WingDesc';
import sd from '../../assets/sdLogo.svg';

const WingsBrief = ({ wingsData }) => {
    const wings=['SD Wing','CP Wing','PDM Wing','CS Wing', 'Core & IOT Wing', 'Robotics Wing', 'AI/ML Wing'];

    const [active, setActive]=useState(0);

  return (
    <div className='flex'>
      <div className='flex flex-col gap-[3rem] text-lg ss:text-2xl border-r-[1px] pr-[3rem] pb-[2rem]'>
            {
                wings.map((wing,index)=>
                <div 
                className={`whitespace-nowrap cursor-pointer font-semibold ${wings[active]===wing ? 'text-[#3466F6] underline decoration-[#3466F6]' : 'opacity-70'}`} 
                key={index} 
                onClick={()=> setActive(index)}
                >
                    {wing}
                </div> 
                )
            }
      </div>
      <div className=''>
            <WingDesc logo={sd} title={wingsData[active]?.name} desc={wingsData[active]?.description} img={null} head={wingsData[active]?.lead} coordinators={wingsData[active]?.coordinators}  />
      </div>
    </div>
  )
}

export default WingsBrief
