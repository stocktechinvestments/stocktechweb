'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react';

type MenuItem = {
    item: string;
    path: string;
};

export default function Header() {
    const path = usePathname()
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const menuItems: MenuItem[] = [
        {
            item: "Home",
            path: '/'
        },
        {
            item: "About",
            path: "/about"
        },
        {
            item: "Mutual Funds",
            path: "/mutual-funds"
        },
        {
            item: "Learn",
            path: "/learn"
        },
        {
            item: "Blogs",
            path: "/blogs"
        },
    ]

    return (
        <header className='w-full relative'>
            <nav className='w-full relative flex justify-between items-center bg-new-green-300 gap-5'>
                <div className='relative max-[816px]:w-[180px] w-[230px]'>
                    <Link href='/'>
                        <Image src='/assets/logo/logo.png'
                            alt='StockTech Investment'
                            width={500}
                            height={200}
                            className='max-[816px]:w-[180px] h-auto w-[230px]'
                        />
                    </Link>
                </div>

                <div
                    className={`md:relative md:bg-transparent fixed max-md:top-0 max-md:bottom-0 max-md:left-0 bg-new-blue-500 z-50 max-md:px-5 max-md:py-5 ${openMenu ? 'open-menu-container' : "menu-container"} `}>

                    <ul className='flex items-center gap-5 flex-row max-md:flex-col max-md:gap-2 max-md:items-start'>
                        <div className='relative hidden max-md:block mb-10 '>
                            <Link href='/'>
                                <Image src='/assets/logo/logo.png'
                                    alt='StockTech Investment'
                                    width={500}
                                    height={200}
                                    style={{ width: "180px", height: "auto" }}
                                />
                            </Link>
                        </div>
                        {
                            menuItems.map((item, idx) => (
                                <li key={idx}>
                                    <Link href={item.path}
                                        className={` hover:text-new-green-500 font-medium text-lg 
                                        ${path === item.path ? 'text-new-green-500' :
                                                'text-new-blue-300 max-md:text-new-light-500'} `}
                                    >
                                        {item.item}
                                    </Link>
                                </li>

                            ))
                        }
                        <li className='relative'>
                            <Link
                                href='/contact'
                                className='relative font-semibold flex items-center justify-center bg-new-blue-500 text-new-light-500 px-3 py-[8px] rounded-md hover:bg-new-blue-300 text-lg max-md:bg-new-green-500 max-md:hover:bg-new-green-300 max-md:mt-5'
                            >Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className='relative w-[50px] h-[50px] md:hidden border border-new-blue-300 flex p-2 rounded-full cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
                    {!openMenu ? <img src="/assets/svg/menu.svg" alt="Menu" /> :
                        <img src="/assets/svg/cross.svg" alt="Menu" />}
                </div>
            </nav>
        </header>
    )
}
