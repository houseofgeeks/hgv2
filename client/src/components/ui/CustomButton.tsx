'use client'

import React from 'react'

interface Props {
    btnTitle: string
    btnClassName?: string
    handleClick: () => void
}

const CustomButton = ({ btnTitle, btnClassName = '', handleClick }: Props) => {
    return (
        <button
            className={`flex flex-row gap-2 items-center justify-center w-full rounded-sm outline-none py-2 ${btnClassName}`}
            onClick={() => { handleClick() }}
        >
            <span>
                {btnTitle}
            </span>
        </button>
    )
}

export default CustomButton
