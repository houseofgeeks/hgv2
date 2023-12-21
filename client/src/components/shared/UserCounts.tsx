import React from 'react'

interface Props {
    count: number
}

const UserCounts = ({ count }: Props) => {
    return (
        <div className='flex items-center relative'>
            <div className='rounded-full relative md:w-6 md:h-6 w-4 h-4 bg-black border-white border'>

            </div>
            {
                count > 1 &&
                <div className='rounded-full relative -left-2 md:w-6 md:h-6 w-4 h-4 bg-black border-white border'>

                </div>
            }
            {
                count > 2 &&
                <div className='rounded-full md:w-6 md:h-6 w-4 relative -left-4 h-4 bg-black border-white border'>

                </div>
            }
            {
                count > 3 &&
                <div className='relative -left-2 text-sm'>
                    + {count - 3}
                </div>
            }
        </div>
    )
}

export default UserCounts
