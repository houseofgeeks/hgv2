import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import ellipse from '../assets/level_ellipse.svg';

const Resources2 = () => {
    const resources2 = [
        {
            title: 'Level1 | Introduction to Frontend Development',
            img: [1, 2, 3, 4],
            img_count: 84
        },
        {
            title: 'Level2 | Introduction to Backend Development',
            img: [1, 2, 3, 4],
            img_count: 50
        },
        {
            title: 'Level3 | Devops',
            img: [1, 2, 3, 4],
            img_count: 16
        }
    ]

    return (
        <div className="px-24 min-h-[100vh] text-white py-5 bg-[#010203]">
            <h1 className="font-normal text-xl mb-6">
                <NavLink className='underline' to={`/resources`}>Resources</NavLink> / Software Development Wing
            </h1>
            <div className='flex flex-col gap-10'>
                {
                    resources2?.map((element, index) => {
                        return (
                            <div key={index} className='bg-[#131414] flex justify-between items-center px-16 py-5'>
                                <div>
                                    <h1 className='text-3xl'>{element.title}</h1>
                                    <div className='flex items-center mt-1'>
                                        {
                                            element?.img?.slice(0, 4).map((e, i) => {
                                                console.log(i)
                                                return (
                                                    <img src={ellipse} key={i} className='relative' style={{ right: `${2 * i}px` }} />
                                                )
                                            })
                                        }
                                        {
                                            element?.img_count > 4 ?
                                                <span className='px-2'> +{(element.img_count) - 4}</span>
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>
                                <NavLink to={`/resources3`}>
                                    <BsChevronRight className='text-[2rem] font-black text-[#EE2A7B] cursor-pointer' />
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Resources2
