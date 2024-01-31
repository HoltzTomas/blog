import Link from "next/link";
import { NeueMachinaRegular, NeueMachinaUltraBold } from "../components/Fonts";

import { Post, getPosts } from "../get-posts";

export const revalidate = 60;

export default async function BlogPage() {

    const posts = await getPosts();

    const myPathPosts = posts.filter(post => post.series === 'mi-camino-como-programador');

    const devPosts = posts.filter(post => post.series === 'programacion');

    return (
        <div className="w-full flex flex-col items-center min-h-[85vh] m-auto">
            <p className={`${NeueMachinaUltraBold.className} text-center text-blue text-[30px] mb-[23.45px]`}>Blog</p>

            {/* My path */}
            <div className="flex flex-col max-w-2xl w-full">
                <div className={`${NeueMachinaUltraBold.className} pb-[10px] text-[16px] flex justify-between items-center`}>
                    <p>Mi camino como programador</p>
                    <p>Views</p>
                </div>

                {
                    myPathPosts.map((post: Post) => {
                        return (
                            <div key={post.id} className={`my-[5px] flex justify-between items-center ${NeueMachinaRegular.className}`}>
                                <Link href={`/blog/${post.id}`} className={`py-[10px] hover:bg-[#eee] active:bg-[#ccc]`}>{post.title}</Link>
                                <p>{post.viewsFormatted ?? 0}</p>
                            </div>
                        )
                    })
                }

                <div className={`${NeueMachinaUltraBold.className} mt-[20px] pb-[10px] text-[16px] flex justify-between items-center`}>
                    <p>Programación</p>
                </div>

                {
                    devPosts.map((post: Post) => {
                        return (
                            <div key={post.id} className={`my-[5px] flex justify-between items-center ${NeueMachinaRegular.className}`}>
                                <Link href={`/blog/${post.id}`} className={`py-[10px] hover:bg-[#eee] active:bg-[#ccc]`}>{post.title}</Link>
                                <p>{post.viewsFormatted}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );

}