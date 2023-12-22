'use client'

import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import SubtaskCard from './SubtaskCard';

type subTitleOption = {
    title: string
}

interface Props {
    title: string
    id: string
    subtitles: subTitleOption[]
}

const TaskCard = ({ title, subtitles, id }: Props) => {
    const [viewSubtitles, setViewSubtitles] = useState<boolean>(false);

    const handleToggleSubtitlesView = () => {
        setViewSubtitles(!viewSubtitles);
    }
    return (
        <div className='bg-secondary-bg transition-all duration-150 ease-in px-6 cursor-pointer w-full p-4 rounded-md shadow' onClick={handleToggleSubtitlesView}>
            <div className='flex flex-row items-center gap-4'>
                <h1 className='text-sm sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap text-ellipsis overflow-hidden flex-1 font-medium'>
                    {title}
                </h1>

                <div className={`md:text-2xl text-lg transition-all duration-150 ease-in ${viewSubtitles ? '-rotate-180' : 'rotate-0'}`}>
                    <FaChevronDown />
                </div>
            </div>

            <div className={`ease-in-out flex flex-col gap-4 transition-all duration-200 overflow-hidden ${viewSubtitles ? 'max-h-fit mt-4' : 'max-h-0 mt-0'}`}>
                {
                    subtitles.map((item, index) => (
                        <SubtaskCard
                            key={title + index}
                            title={item.title}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TaskCard
