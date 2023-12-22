'use client'

import CustomButton from '../ui/CustomButton'

interface Props {
    isSubmitted: 'VERIFIED' | 'NOT_SUBMITTED' | 'SUBMITTED'
}

const AssignmentCard = ({ isSubmitted }: Props) => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='bg-secondary-bg w-full aspect-video'>

            </div>

            <div className=''>
                <CustomButton
                    btnTitle='Read Description'
                    btnClassName={`bg-[#3466F6] font-medium text-sm sm:text-base`}
                    handleClick={() => { }}
                />
            </div>
        </div>
    )
}

export default AssignmentCard
