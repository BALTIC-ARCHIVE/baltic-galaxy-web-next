'use client';
import BlogPostCard from "@/components/cards/blog-post";
import useFetch from "@/app/hooks/useFetch";
import {useEffect, useState} from "react";
import Image from "next/image";


export default function BlogPage() {
    const [articles, setArticles] = useState([] as any)
    const [singleArticle, setSingleArticle] = useState({} as any)
    let newestArticle: any;
    const {loading, error, data, refetch} = useFetch({
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
        if (data && singleArt) {
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
        <main
            className="flex justify-center min-h-screen overflow-x-hidden flex-col items-center ">
            <div className="lg:px-20">
                <div className={"lg:h-[80vh] px-20 h-[40vh] relative bg-no-repeat lg:py-60 py-12"}>
                    <div className="my-auto h-1/2 max-w-[1200px] mx-auto z-50">
                        <h1 className="text-white lg:text-6xl text-4xl font-medium leading-tight">{singleArticle.title}</h1>
                        <div className="w-2/3 mt-7">
                            <p className="text-white/80 text-[20px] flex-wrap">{singleArticle.short_text}</p>
                        </div>

                        <div className="mt-7">
                            <a href={'/blog/' + singleArticle.slug}
                               className="inline-flex justify-center rounded-md text-sm font-semibold py-3 px-8 bg-[#ffc442] text-black uppercase hover:bg-[#dba42a] hover:cursor-pointer">Weiterlesen</a>
                        </div>

                    </div>
                    <Image
                        height={1920} width={1080} alt="alt"
                        className="absolute top-10 -z-50 left-0 lg:h-[70vh] h-[40vh] w-[100vw] "
                        src={singleArticle.cover_url}/>
                </div>


                <div className="max-w-[1200px] mx-auto">

                <div className="mt-5 py-20   z-50 grid lg:grid-cols-3 grid-cols-1 gap-4">
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
            </div>
            <div className="header w-full h-[70vh] bg-bg-snow bg-top bg-no-repeat bg-cover px-4 xl:px-0 justify-center items-center">
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="text-[40px] xl:text-[52px] text-center font-bold mt-10">TRETE DER COMMUNITY BEI</h1>
                    <div className="hr-blue w-1/4 text-center mx-auto"></div>
                    <h4 className="text-[16px] xl:text-[18px] mt-12 w-2/3 mx-auto font-normal text-center">
                        Du liebst Star Wars, MMO´s oder Minecraft genau so wie wir?
                        Dann wirst du dich wie Zuhause fühlen! Werde ein Teil unserer großartigen Community.
                    </h4>
                    <div className="flex justify-center mt-12 relative z-50"><a
                        className="px-8 py-4 rounded-md bg-[#5865F2] text-white/80 hover:bg-[#5865F2]/90 border-[#7E89B1] text-sm font-medium mr-5"
                        href="https://discord.gg/6UKwkjgU5e">DISCORD BEITRETEN</a></div>
                </div>
            </div>
        </main>
    )
}
