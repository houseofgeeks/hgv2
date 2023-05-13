import React from 'react';
import './Main.css';
import triangle from '../../assets/triangle.svg';
import circle from '../../assets/circle.svg';
import rect from '../../assets/rectangle.svg';

const Main = () => {
    return (
        <div className='grid justify-center items-center h-[40vw] min-h-[35vh] aboutMainBg'>
            {/* ------------------------------------------------------- */}
            {/* left side of banner start */}
            {/* ------------------------------------------------------- */}
            <div className='relative bottom-[10rem] hidden sm:block'>
                <img src={triangle} alt='' className='relative top-[1rem]' />
                <img src={circle} alt='' className='relative bottom-[1.5rem] left-[1rem]' />
            </div>
            {/* ------------------------------------------------------- */}
            {/* left side of banner end */}
            {/* ------------------------------------------------------- */}

            {/* ------------------------------------------------------- */}
            {/* middle section of banner start */}
            {/* ------------------------------------------------------- */}
            <div className='flex relative items-center justify-center h-[100%]'>
                <div className='w-[32%] h-[55%] main-bg-1 relative left-[2rem]'>
                </div>
                <div className='main-bg-2 w-[36%] h-[60%]'>
                </div>
                <div className='main-bg-3 w-[32%] h-[55%] relative right-[2rem]'>
                </div>
                <div className='absolute xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl text-4xl font-normal flex flex-col'>
                    <div className='main-bg-text relative top-[0.5rem]'>House Of Geeks</div>
                    <div className='main-bg-text-shadow relative bottom-[0.5rem]'>House Of Geeks</div>
                </div>
            </div>
            {/* ------------------------------------------------------- */}
            {/* middle section of banner end */}
            {/* ------------------------------------------------------- */}

            {/* ------------------------------------------------------- */}
            {/* right side of banner start */}
            {/* ------------------------------------------------------- */}
            <div className='relative top-[8rem] sm:block hidden'>
                <img src={rect} alt='' className='' />
                <img src={rect} alt='' className='relative bottom-[5rem] left-[1rem]' />
            </div>
            {/* ------------------------------------------------------- */}
            {/* right side of banner end */}
            {/* ------------------------------------------------------- */}
        </div>
    )
}

export default Main
