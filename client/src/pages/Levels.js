import React from 'react';
import { NavLink } from 'react-router-dom';
import LevelCard from '../components/levels/LevelCard';

const Levels = () => {
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
        <div className="px-24 min-h-[90vh] text-white py-5 bg-[#010203]">
            <h1 className="font-normal text-xl mb-6">
                <NavLink className='underline' to={`/resources`}>Resources</NavLink> /  
                <NavLink to={`/resources/levels`} > Software Development Wing</NavLink>
            </h1>
            <div className='flex flex-col gap-10'>
                {
                    resources2?.map((element, index) => {
                        return (
                            <LevelCard element={element} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Levels
