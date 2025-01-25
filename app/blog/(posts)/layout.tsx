import { Inter } from "next/font/google";
import { AvatarLogo } from "@/app/components/AvatarLogo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Tomas Holtz's blog",
    description:
        "Tomas Holtz is a 21yo software developer from Argentina. He has worked building the frontend of the Fintechs Belo App and Suku World",
    openGraph: {
        title: "Tomas Holtz's blog",
        description:
            "Tomas Holtz is a 21yo software developer from Argentina. He has worked building the frontend of the Fintechs Belo App and Suku World",
        url: "https://tomasholtz.com",
        siteName: "Tomas Holtz's blog",
    },
    twitter: {
        card: "summary_large_image",
        site: "@tomasholtz_",
        creator: "@tomasholtz_",
    },
    metadataBase: new URL("https://tomasholtz.com"),
};


export default function PostsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full flex flex-col items-center m-auto mt-[23.45px]">
            <AvatarLogo />
            <div className={`md:w-[70%] lg:w-[60%] leading-[2] blog-page`}>
                {children}
            </div>
        </div>
    );
}
