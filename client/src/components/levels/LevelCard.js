import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import ellipse from '../../assets/level_ellipse.svg';

const LevelCard = ({ element }) => {
    return (
        <div className='bg-[#131414] flex justify-between items-center px-16 py-5'>
            <div>
                <h1 className='text-3xl'>
                    {element.title}
                </h1>
                <div className='flex items-center mt-1'>
                    {
                        element?.img?.slice(0, 4).map((e, i) => {
                            return (
                                <img src={ellipse} key={i} className='relative' style={{ right: `${3 * i}px` }} alt='ellipse' />
                            )
                        })
                    }
                    {
                        element?.img_count > 4 ?
                            <span>
                                +{(element.img_count) - 4}
                            </span>
                            :
                            <></>
                    }
                </div>
            </div>
            <NavLink to={`/resources/levels/tasks`}>
                <BsChevronRight className='text-[2rem] font-black text-[#EE2A7B] cursor-pointer' />
            </NavLink>
        </div>
    )
}

export default LevelCard
