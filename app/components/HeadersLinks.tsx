"use client";

import Link from "next/link";
import { Ddin, NeueMachinaUltraBold } from "./Fonts";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function HeaderLinks() {

    const pathname = usePathname();

    const isAboutPage = pathname === '/about';
    const isTimelinePage = pathname === '/timeline';
    const isBlogPage = pathname === '/blog';

    useEffect(() => {
        // Check if this is a blog post route
        const slug = pathname.split('/')[2];
        const isBlogPost = pathname.startsWith('/blog/') && slug;

        if (!isBlogPost) return;

        const url = "/api/view?incr=1&slug=" + encodeURIComponent(slug);

        fetch(url)
            .then(res => res.json())
            .catch(console.error);
    }, [pathname])


    return (
        <div className="flex flex-row justify-between w-full md:w-[60%] items-center">
            <Link href={'/'}>
                <p className={`text-center text-[20px] font-bold ${NeueMachinaUltraBold.className}`}>TOMAS<br />HOLTZ</p>
            </Link>
            <Link href='/about' className={`${Ddin.className}`}>
                <p className={`text-[18px] ${isAboutPage && 'underline'}`}>¿Quién carajo soy?</p>
            </Link>
            <Link href='/timeline' prefetch className={`${Ddin.className}`}>
                <p className={`text-[18px] ${isTimelinePage && 'underline'}`}>TIMELINE</p>
            </Link>
            <Link href='/blog' prefetch className={`${Ddin.className}`}>
                <p className={`text-[18px] ${isBlogPage && 'underline'}`}>BLOG</p>
            </Link>
        </div>
    )
}
