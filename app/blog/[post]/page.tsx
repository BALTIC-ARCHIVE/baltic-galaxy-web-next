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

    function timeConverter(UNIX_timestamp: any){
        var a = new Date(UNIX_timestamp);
        var months = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var time = date + '. ' + month + ' ' + year + ', ' + hour + ':' + min + ' Uhr';
        return time;
    }

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
        <main className="bg-black mx-auto w-full overflow-x-hidden">
            <div className="xl:px-0 my-0">
                <div className="text-white lg:h-[80vh] relative h-[40vh]">
                    <div className="bg-gradient-blog-post-header z-10 absolute w-full lg:h-[80vh] h-[40vh]"></div>
                    <Image
                        src={singlePost.cover_url}
                        alt="blog_image"
                        width={1920}
                        height={1080}
                        className="lg:h-[80vh] h-[40vh] w-full"
                    />
                    <div className="z-20 px-4">
                        <h1 className="xl:text-5xl text-3xl font-bold mb-4 z-20 leading-normal absolute bottom-20 left-0 xl:px-20 px-4">{singlePost.title}</h1>
                        <div className="xl:px-20 h-20 z-20 w-full absolute bottom-0">
                            <div className="xl:float-right float-left mb-4">
                                <span className="text-gray-600">{timeConverter(Date.parse(singlePost.created_at))}</span>
                            </div>
                            <div className="w-72 float-left">
                                <Image height={250} width={250} alt="avatr"
                                       className="h-16 w-16 lg:h-20 xl:w-20 rounded-[10px] float-left mr-2"
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

                <div className="px-2 lg:px-52 ">

                    <div className="xl:mx-28 p-2 pt-20 mb-48 text-white">
                        <div className="text-white text-xl lg:text-2xl"  dangerouslySetInnerHTML={{__html: cleanText}}/>
                    </div>
                </div>

            </div>

            <div className="mt-5 py-20 px-4 lg:px-40 grid lg:grid-cols-3 grid-cols-1 gap-4">
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