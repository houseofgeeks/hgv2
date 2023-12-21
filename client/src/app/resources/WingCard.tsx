import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

interface Props {
    title: string
    wingId: string
    description: string
}

const WingCard = ({ title, description, wingId }: Props) => {
    return (
        <div className='w-full flex flex-col gap-2'>
            <div className='w-full aspect-video bg-secondary-bg shadow-sm'>

            </div>
            <h2 className='text-xl font-medium mt-1.5'>
                {title}
            </h2>

            <div className="break-words text-sm font-light">
                {description.slice(0, 147)}{" "}
                {description.length > 147 && <span className='text-gray-300'>...more</span>}
            </div>

            <Link
                href={`/resources/${wingId}`}
                className='text-primary-color flex items-center hover:underline'
            >
                Start this track
                <FiArrowUpRight />
            </Link>
        </div>
    )
}

export default WingCard
