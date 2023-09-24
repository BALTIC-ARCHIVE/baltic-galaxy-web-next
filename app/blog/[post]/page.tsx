'use client'
import {useEffect, useState} from "react";
import InputGroup from "@/components/utils/InputGroup";
import InputCheckbox from "@/components/utils/InputCheckbox";
import InputTextArea from "@/components/utils/InputTextArea";
import {EmbedBuilder, WebhookClient} from "discord.js";
import {useRouter} from 'next/navigation'
import Image from "next/image";
import DOMPurify from 'dompurify';
import BlogPostCard from "@/components/cards/blog-post";

export default function Home({params}: { params: { post: string } }) {
    const [allPosts, setAllPosts] = useState([] as any)
    const [singlePost, setSinglePost] = useState({} as any)
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()
    let cleanText: any;

    useEffect(() => {
        setLoading(true);
        fetch('https://plexus.baltic-galaxy.de/api/articles')
            .then((res) => res.json())
            .then((allPosts) => {
                setAllPosts(allPosts)
            });
        fetch('https://plexus.baltic-galaxy.de/api/articles/single/' + params.post)
            .then((res) => res.json())
            .then((singlePost) => {
                setSinglePost(singlePost)
            });
        setLoading(false);

    }, [])

    cleanText = DOMPurify.sanitize(singlePost.text, {
        ADD_TAGS: ["iframe"],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']
    });
    if (isLoading) return <p>Loading...</p>

    return (
        <main className="bg-black mx-auto w-full">
            <div className="xl:px-0 sm:px-5 md:px-4 my-0">
                <div className="text-white h-[80vh]">
                    <div className="bg-gradient-blog-post-header z-10 absolute w-full h-[80vh]"></div>
                    <Image
                        src={singlePost.cover_url}
                        alt="blog_image"
                        width={1920}
                        height={1080}
                        className="h-[80vh] w-full"
                    />
                    <div className="z-20">
                        <h3 className="text-gray-400 uppercase z-20 text-[18px] absolute bottom-40 px-20">Ab anfang
                            2024!</h3>
                        <h1 className="text-5xl font-bold mb-4 z-20 leading-normal absolute bottom-20 px-20">{singlePost.title}</h1>
                        <div className="xl:px-20 h-20 z-20 w-full absolute bottom-0">
                            <div className="xl:float-right float-left mb-4">
                                <span className="text-gray-600">Sonntag, den 22. Januar 2023</span>
                            </div>
                            <div className="w-72 float-left">
                                <Image height={250} width={250} alt="avatr"
                                       className="h-16 xl:h-20 xl:w-20 rounded-[10px] float-left mr-2"
                                       src="https://cravatar.eu/helmavatar/dieserjohn/250.png"/>
                                <div className="float-left ml-2">
                                    <h1 className="text-white xl:mt-4">John</h1>
                                    <span
                                        className="text-white bg-[#fd3535] py-[2px] px-[5px] rounded uppercase text-sm font-semibold">Admin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-52 ">

                    <div className="xl:mx-28 mx-6 p-2 pt-20 mb-48 text-white">
                        <div className="text-white" dangerouslySetInnerHTML={{__html: cleanText}}/>
                    </div>
                </div>

            </div>

            <div className="mt-5 py-20 px-40 grid grid-cols-3 gap-4">
                {allPosts.slice(0,3).map((post: any, index: any) => (
                    <BlogPostCard
                        key={index}
                        postTitle={post.title}
                        postDesc={post.description}
                        postImgUrl={post.cover_url}
                        postSlug={'/' + post.slug}
                    />
                ))}
            </div>

        </main>
    )
}