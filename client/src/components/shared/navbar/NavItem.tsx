'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaAngleRight } from "react-icons/fa6";

interface Props {
    link: string
    name: string
    value: string,
    Icon: React.ElementType,
    handleClose: () => void
}

const NavItem = ({ name, value, link, Icon, handleClose }: Props) => {
    const pathname = usePathname();

    return (
        <h2 className={`w-full sm:text-center`}>

            {/* for mobile screen  */}
            <Link
                href={link}
                onClick={handleClose}
                className={`sm:hidden flex items-center py-4 justify-between px-3 rounded-md ${pathname === link && 'text-primary-color bg-secondary-bg'}`}
            >
                <span className="flex gap-4 items-center">
                    <span className="text-xl">
                        <Icon />
                    </span>
                    {name}
                </span>
                <FaAngleRight />
            </Link>

            {/* for desktop screen  */}
            <Link
                href={link}
                className={`pb-0.5 hidden sm:flex ${pathname === link && 'border-primary-color border-b-2'}`}
            >
                {name}
            </Link>
        </h2>
    )
}

export default NavItem
