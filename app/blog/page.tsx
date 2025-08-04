import Link from "next/link";
import { NeueMachinaRegular, NeueMachinaUltraBold } from "../components/Fonts";

import { Post, getPosts } from "../get-posts";

export const revalidate = 60;

const talks = [
    {
        id: 1,
        title: "Di una CHARLA SOBRE MI VIDA para +600 PERSONAS | Nodo Tech Week 2024",
        youtubeUrl: "https://www.youtube.com/watch?v=RSeqn85Crfo",
        youtubeId: "RSeqn85Crfo",
        description: "Description of your first talk"
    },
    {
        id: 2,
        title: "COMO TENER UNA VIDA MUY DIVERTIDA E INTERESANTE | Tomás Holtz - Provocación Live 2025", 
        youtubeUrl: "https://www.youtube.com/watch?v=lqC3jkrk_eE",
        youtubeId: "lqC3jkrk_eE",
        description: "Description of your second talk"
    }
];

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
                                <Link href={`/blog/${post.slug}`} prefetch className={`py-[10px] hover:bg-[#eee] active:bg-[#ccc]`}>{post.title}</Link>
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
                                <Link href={`/blog/${post.slug}`} prefetch className={`py-[10px] hover:bg-[#eee] active:bg-[#ccc]`}>{post.title}</Link>
                                <p>{post.viewsFormatted}</p>
                            </div>
                        )
                    })
                }

                <p className={`${NeueMachinaUltraBold.className} text-center text-blue text-[30px] my-[23.45px]`}>Talks</p>

                {
                    talks.map((talk) => {
                        return (
                            <div key={talk.id} className="mb-10">
                                <div className={`${NeueMachinaUltraBold.className} pb-[10px] text-[16px] flex justify-between items-center`}>
                                    <p>{talk.title}</p>
                                </div>

                                <div className="flex mt-4 justify-center">
                                    <iframe
                                        className="w-full max-w-2xl aspect-video"
                                        src={`https://www.youtube.com/embed/${talk.youtubeId}`}
                                        title={talk.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    );

}