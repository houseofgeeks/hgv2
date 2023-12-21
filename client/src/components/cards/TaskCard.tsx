import React from 'react'
import { FaChevronDown } from "react-icons/fa";

type subTitleOption = {
    title: string
}

interface Props {
    title: string
    id: string
    subtitles: subTitleOption[]
}

const TaskCard = ({ title, subtitles, id }: Props) => {
    return (
        <div className='bg-secondary-bg flex flex-row items-center px-6 cursor-pointer w-full p-4 rounded-md shadow'>
            <div className='flex flex-row flex-1'>
                {/* checkbox to be added  */}
                <h1 className='text-sm sm:text-lg md:text-xl lg:text-2xl text-ellipsis overflow-hidden flex-1 font-medium'>
                    {title}
                </h1>
            </div>

            <div className='text-2xl'>
                <FaChevronDown />
            </div>

            <div className={``}>

            </div>
        </div>
    )
}

export default TaskCard
