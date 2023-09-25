'use client';
import BlogPostCard from "@/components/cards/blog-post";
import useFetch from "@/app/hooks/useFetch";
import {useEffect, useState} from "react";
import Image from "next/image";


export default function BlogPage() {
    const [articles, setArticles] = useState([] as any)
    const [singleArticle, setSingleArticle] = useState({} as any)
    let newestArticle: any;
    const { loading, error, data, refetch } = useFetch({
        url: "https://plexus.baltic-galaxy.de/api/articles",
        method: "get",
        key: [],
        cache: {
            enabled: true,
            ttl: 10000
        }
    });
    const singleArt = useFetch({
        url: "https://plexus.baltic-galaxy.de/api/articles/first",
        method: "get",
        key: [],
        cache: {
            enabled: true,
            ttl: 10000
        }
    }).data;


    useEffect(() => {
        if (data && singleArt){
            setArticles(data.data);
            setSingleArticle(singleArt.data);
        }

    }, [data, singleArt])

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong</p>;
    }

    return (
        <main className="flex justify-center min-h-screen overflow-x-hidden flex-col items-center ">
            <div className="lg:px-20">
                <div className={"lg:h-[80vh] h-[40vh] relative  bg-no-repeat lg:px-40 px-4 lg:py-48 py-12"}>
                    <div className="my-auto h-1/2 z-50">
                        <h1 className="text-white lg:text-6xl text-4xl font-medium leading-tight">{singleArticle.title}</h1>
                        <div className="w-2/3 mt-7">
                            <p className="text-white/80 text-[20px] flex-wrap">{singleArticle.short_text}</p>
                        </div>

                        <div className="mt-7">
                            <a href={'/blog/' + singleArticle.slug} className="inline-flex justify-center rounded-md text-sm font-semibold py-3 px-8 bg-[#ffc442] text-black uppercase hover:bg-[#dba42a] hover:cursor-pointer">Weiterlesen</a>
                        </div>

                    </div>
                    <Image
                        height={1920} width={1080} alt="alt"
                        className="absolute top-0 -z-50 left-0 lg:h-[80vh] h-[40vh] w-[100vw] "
                        src={singleArticle.cover_url}/>
                </div>


                <div className="mt-5 py-20 lg:px-40 px-8 z-50 grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {articles && articles.reverse().map((post: any, index: any) => (
                        <BlogPostCard key={index}
                                      postTitle={post.title}
                                      postDesc={post.short_text}
                                      postImgUrl={post.cover_url}
                                      postSlug={post.slug}
                        />
                    ))}
            </div>
        </div>

        </main>
    )
}
