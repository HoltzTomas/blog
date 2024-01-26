"use client";

import Link from "next/link";
import { Ddin, NeueMachinaUltraBold } from "./Fonts";
import { usePathname } from "next/navigation";

export function HeaderLinks() {

    const pathname = usePathname();

    const isAboutPage = pathname === '/about';
    const isBlogPage = pathname === '/blog';

    return (
        <div className="flex flex-row justify-between w-full md:w-[60%] items-center">
            <p className={`text-center text-[20px] font-bold ${NeueMachinaUltraBold.className}`}>TOMAS<br />HOLTZ</p>
            <Link href='/about' className={`${Ddin.className}`}>
                <p className={`text-[18px] ${isAboutPage && 'underline'}`}>ABOUT ME</p>
            </Link>
            <Link href='/blog' className={`${Ddin.className}`}>
                <p className={`text-[18px] ${isBlogPage && 'underline'}`}>BLOG</p>
            </Link>
        </div>
    )
}