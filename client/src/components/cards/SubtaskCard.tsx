import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

interface Props {
    title: string
}

const SubtaskCard = ({ title }: Props) => {
    return (
        <div className='flex md:flex-row flex-col items-center md:justify-between gap-2 md:gap-6 bg-black p-4 py-3 rounded'>
            <div className='flex-1 flex flex-row items-center gap-6 overflow-hidden text-ellipsis'>
                <h1 className='flex-1 text-sm md:text-base overflow-hidden text-ellipsis whitespace-nowrap'>
                    {title}
                </h1>
            </div>

            <div className='flex flex-row text-xs sm:text-sm text-[rgba(255,255,255,0.6)]'>
                <Link
                    href={'/resources/1/3'}
                    className='flex items-center hover:text-primary-color underline px-2 border-r'
                >
                    watch1
                    <FiArrowUpRight />
                </Link>
                <Link
                    href={'/resources/1/3'}
                    className='flex items-center hover:text-primary-color underline px-2 border-r'
                >
                    watch2
                    <FiArrowUpRight />
                </Link>
                <Link
                    href={'/resources/1/3'}
                    className='flex items-center hover:text-primary-color underline px-2'
                >
                    watch3
                    <FiArrowUpRight />
                </Link>
            </div>
        </div>
    )
}

export default SubtaskCard
