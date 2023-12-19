'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type NavItemMenu = {
    link: string
    name: string
    value: string
}

interface Props {
    item: NavItemMenu
}

const NavItem = ({ item }: Props) => {
    const pathname = usePathname();

    return (
        <h2 className={`px-1 w-full text-center md:bg-transparent rounded-md md:py-0 py-2.5 ${pathname === item.link && 'bg-primary-color'}`}>
            <Link
                href={item.link}
                className={`pb-0.5 ${pathname === item.link && 'border-primary-color border-b-2'}`}
            >
                {item.name}
            </Link>
        </h2>
    )
}

export default NavItem
