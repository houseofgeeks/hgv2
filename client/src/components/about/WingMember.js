import React from 'react'

const WingMember = ({ name, img }) => {
    return (
        <div className='flex flex-col gap-[1rem]'>
            <img src={img} alt='' className='w-[100px]' />
            <div className='text-xl'>
                {
                    name
                }
            </div>
        </div>
    )
}

export default WingMember
