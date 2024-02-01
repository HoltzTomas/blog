"use client";

import Link from "next/link";
import { Ddin, NeueMachinaUltraBold } from "./Fonts";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import postsData from '../blog/posts.json';

export function HeaderLinks() {

    const pathname = usePathname();

    const isAboutPage = pathname === '/about';
    const isBlogPage = pathname === '/blog';

    useEffect(() => {
        const isPost = postsData.posts.some(post => post.id === pathname.split('/')[2]);

        if (!isPost) return;

        const url = "/api/view?incr=1&id=" + encodeURIComponent(pathname.split('/')[2]);

        fetch(url)
            .then(res => res.json())
            .catch(console.error);
    }, [pathname])


    return (
        <div className="flex flex-row justify-between w-full md:w-[60%] items-center">
            <Link href={'/'}>
                <p className={`text-center text-[20px] font-bold ${NeueMachinaUltraBold.className}`}>TOMAS<br />HOLTZ</p>
            </Link>
            <Link href='/blog' className={`${Ddin.className}`} legacyBehavior>
                <a href="https://github.com/TomiHoltz/blog" rel="noopener noreferrer" target="_blank" className={`text-[18px]`}>SOURCE</a>
            </Link>
            <Link href='/blog' className={`${Ddin.className}`}>
                <p className={`text-[18px] ${isBlogPage && 'underline'}`}>BLOG</p>
            </Link>
        </div>
    )
}