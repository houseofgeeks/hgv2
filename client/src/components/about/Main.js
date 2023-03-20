import React from 'react';
import './Main.css';
import triangle from '../../assets/triangle.svg';
import circle from '../../assets/circle.svg';
import rect from '../../assets/rectangle.svg';

const Main = () => {
    return (
        <div className='flex justify-center items-center h-[40vw]'>
            <div className='relative bottom-[10rem]'>
                <img src={triangle} alt='' className='relative top-[1rem]' />
                <img src={circle} alt='' className='relative bottom-[1.5rem] left-[1rem]' />
            </div>
            <div className='flex relative items-center justify-center'>
                <div className='w-[300px] h-[315px] main-bg-1  left-[5rem] relative'>
                </div>
                <div className='main-bg-2 w-[388px] h-[360px]'>
                </div>
                <div className='main-bg-3 w-[320px] h-[300px] relative right-[5rem]'>
                </div>
                <div className='absolute text-8xl font-normal flex flex-col'>
                    <div className='main-bg-text relative top-[0.5rem]'>House Of Geeks</div>
                    <div className='main-bg-text-shadow relative bottom-[0.5rem]'>House Of Geeks</div>
                </div>
            </div>
            <div className='relative top-[8rem]'>
                <img src={rect} alt='' className='' />
                <img src={rect} alt='' className='relative bottom-[5rem] left-[1rem]' />
            </div>
        </div>
    )
}

export default Main
