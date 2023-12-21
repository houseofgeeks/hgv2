import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import UserCounts from '../shared/UserCounts';


interface Props {
    levelId: string
    title: string
    count: number,
    resourceId: string
}

const LevelCard = ({ levelId, title, count, resourceId }: Props) => {
    return (
        <Link href={`/resources/${resourceId}/${levelId}`} className='bg-secondary-bg hover:shadow-lg group items-center p-4 px-6 rounded-md gap-4 shadow flex flex-row justify-between'>

            <div className='flex flex-col gap-2 flex-1 max-w-[80%] text-ellipsis'>
                <h1 className='md:text-2xl group-hover:text-primary-color sm:text-lg text-base overflow-hidden font-medium md:font-semibold text-ellipsis whitespace-nowrap'>
                    {title}
                </h1>
                <div className='flex items-center'>
                    <UserCounts
                        count={count}
                    />
                </div>
            </div>

            <div className="group-hover:text-primary-color text-2xl">
                <FaChevronRight />
            </div>
        </Link>
    )
}

export default LevelCard
