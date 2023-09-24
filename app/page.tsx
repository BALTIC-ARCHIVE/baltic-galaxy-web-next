'use client';
import Image from 'next/image'
import {IoPlay} from "react-icons/io5";
import {useEffect, useState} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import InputGroup from "@/components/utils/InputGroup";
import InputTextArea from "@/components/utils/InputTextArea";
import {useRouter} from "next/navigation";
import BlogPostCard from "@/components/cards/blog-post";
import AudioListItem from "@/components/audio-list-item/comp";
import useFetch from "@/app/hooks/useFetch";
import TeamHead from "@/components/team-head/comp";
import AudioListGroup from "@/components/audio-list-group/comp";


export default function Home() {
    const [team, setTeam] = useState([] as any)
    const [articles, setArticles] = useState([] as any)
    const router = useRouter()
    const [inputs, setInputs] = useState({} as any);



    const blogArticles = useFetch({
        url: "https://plexus.baltic-galaxy.de/api/articles",
        method: "get",
        key: [],
        cache: {
            enabled: true,
            ttl: 10000
        }
    }).data;

    const { loading, error, data, refetch } = useFetch({
        url: "https://plexus.baltic-galaxy.de/api/team",
        method: "get",
        key: [],
        cache: {
            enabled: true,
            ttl: 10000
        }
    });

    useEffect(() => {
        if (data && blogArticles){
            setTeam(data.data);
            setArticles(blogArticles.data);
        }

    }, [data, blogArticles])

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong</p>;
    }

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value: any = event.target.value;
        setInputs((values: any) => ({...values, [name]: value}))
    }


    const handleSubmit = (event: any) => {

        event.preventDefault();
        console.log(inputs);

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1122843083944497204/NLQDvSzpihYVgC4Zt963cjrWaf4P9etM-IBBJ0T-7hHEBTjELSRdLKWJNeQ6j1M3J1kW");
        request.setRequestHeader('Content-type', 'application/json');

        const params = {
            username: "Kontakti",
            avatar_url: "https://www.baltic-galaxy.de/assets/images/logo.png",
            content: "Neue Anfrage von " + inputs.name + " @everyone \n\n" +
                "**E-Mail:** \n" + inputs.email + "\n\n" +
                "**Anfrage: **\n" + inputs.anfrage + "\n\n",

        }

        request.send(JSON.stringify(params));
        router.push('/apply/success');
    }

    return (
        <main className="flex justify-center min-h-screen bg-black flex-col items-center justify-between">
            <div className=" h-[70vh] bg-cover bg-no-repeat relative bg-bg-hoth bg-bottom border-r border-white w-full">
                <div className="absolute bottom-48 mx-48">
                    <div className="w-4/6">
            <span
                className="px-[20px] py-[7px] h-1 text-bal-yellow-darker bg-black/10 font-bold border border-white/20 text-[14px] rounded-full group hover:cursor-pointer">Wir suchen Verstärkung - Jetzt bewerben
                <Image
                height={20} width={20} alt="alt"
                className="inline transition-all ease-in-out group-hover:ml-3 ml-2 h-4 w-4"
                src="/assets/images/icons/arrow_right_yellow.svg"/></span>
                        <h1 className=" mt-5 text-[52px] font-medium">TAUCHE EIN IN EIN STAR WARS ABENTEUER</h1>
                        <div className="hr w-2/4"></div>
                        <p className="mt-10 mb-10 text-[18px] text-white">
                            Trete dem Imperium oder der Neuen Republik bei und kämpfe in Schlachten um ganze Flotten in
                            vorderster Front! </p>

                        <a
                            className="px-8 py-4 rounded-md bg-bal-yellow-darker text-black/80 hover:bg-bal-yellow border-[#7E89B1] text-sm font-medium mr-5"
                            href="/about-us">DISCORD BEITRETEN</a>
                        <a
                            className="px-8 py-4 rounded-md bg-black text-white/80 border-2  hover:bg-black/70 border-[#7E89B1]/70 text-sm font-medium mr-5"
                            href="/about-us">SERVERADRESSE KOPIEREN</a>
                    </div>
                </div>
            </div>

            <div className="xl:w-3/4 w-4/4 bg-black pb-16 mt-8 grid  gap-x-22 grid-cols-2">
                <div className="my-auto w-4/6">
                    <h1 className="text-[32px] font-medium">WAS IST BALTIC GALAXY?</h1>
                    <div className="hr w-1/2"></div>
                    <p className="mt-8 mb-8 text-[18px] text-white">Lorem ipsum dolor sit amet consectetur adipiscing
                        elit Ut et massa mi. Aliquam in hendrerit urna. <br/><br/>

                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
                        magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                        Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel
                        euismod erat placerat. In iaculis arcu eros. </p>
                    <a
                        className="px-8 py-4 rounded-md bg-bal-yellow-darker text-black/80 hover:bg-bal-yellow border-[#7E89B1] text-sm font-medium mr-5"
                        href="/about-us">ENTDECKEN</a>
                </div>
                <div className=" bg-bg-kessel2 bg-center bg-200% bg-no-repeat rounded-xl w-full h-[800px]">
                </div>
            </div>


            <div className="xl:w-3/4 w-4/4 bg-black pb-16 mt-8 grid  gap-x-12 grid-cols-2">
                <div className="my-auto float-left">
                    <Image
                        height={2000} width={2000} alt="alt"
                        className=""
                        src="/assets/images/minecraft-server.png"/>
                </div>
                <div className="my-auto ">
                    <h1 className="text-[32px] font-medium">TRAGE UNS JETZT IN DEINE SERVERLISTE EIN!</h1>
                    <div className="hr w-1/2"></div>
                    <p className="mt-8 mb-8 text-[18px] text-white">Lorem ipsum dolor sit amet consectetur adipiscing
                        elit Ut et massa mi.
                        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
                        ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
                        ornare leo.</p>
                    <a
                        className="px-8 py-4 rounded-md bg-bal-yellow-darker text-black/80 hover:bg-bal-yellow border-[#7E89B1] text-sm font-medium mr-5"
                        href="/about-us">SERVER ADRESSE KOPIEREN</a>
                </div>
            </div>

            <div className="xl:w-3/4 w-4/4 mt-8">
                <h1 className="text-[32px] mb-4 font-medium">WAS IST BALTIC GALAXY?</h1>
                <div className="hr w-1/12"></div>
                <div className="py-16 grid grid-cols-3 gap-4">
                    {articles && articles.slice(0, 3).map((post: any, index: any) => (
                        <BlogPostCard key={index}
                            postTitle={post.title}
                            postDesc={post.short_text}
                            postImgUrl={post.cover_url}
                            postSlug={post.slug}
                        />
                        ))}
                </div>
            </div>

            <div className="mt-20 xl:mt-40 xl:w-3/4 w-5/6 py-8 mx-auto grid grid-cols-1 xl:grid-cols-2">
                <div className="mb-8">

                    <div className="mb-8">
                        <Image src="/assets/images/alex-44.png" alt="alt" width={44} height={44}
                               className="rounded-full float-left mr-5"/>
                        <p className="pt-2 pl-4 text-white/70 underline">Alexander Rose Music</p>
                    </div>

                    <h4 className="gradient-h4">Musikalisch genießen</h4>
                    <h1 className="text-white text-4xl font-medium leading-tight">Unsere exklusiven Soundtracks</h1>
                    <div className="w-3/3 xl:w-2/3 mt-7 mb-4">
                        <p className="text-gray-400 text-[16px] flex-wrap">
                            Wir möchten dich in eine atemberaubende Welt abtauchen lassen. Dafür braucht es mehr als
                            eine große Leinwand.
                            Seit Monaten arbeiten wir eng mit dem talentierten Komponisten Alexander Rose zusammen, um
                            dir diese Meisterwerke zu präsentieren!
                        </p>
                    </div>
                    <a className="text-bal-blue py-2 cursor-pointer group">Alle Tracks anhören <Image
                        height={20} width={20} alt="alt"
                        className="inline transition-all ease-in-out group-hover:ml-3 ml-2 h-4 w-4"
                        src="/assets/images/icons/arrow_right.png"/></a>
                </div>

                <AudioListGroup />
            </div>

            <div className="heading relative h-[75vh] mb-36 lg:h-[65vh] xl:w-2/4 w-5/6">
                <h4 className="mt-32 text-gradient-blue text-[18px] xl:mt-52 text-center">JETZT TEIL DES TEAMS WERDEN!</h4>
                <h1 className="text-[35px] xl:text-[52px] font-medium mt-0 text-center">ENTFALTE DEINE KREATIVITÄT FÜR AUFREGENDE PROJEKTE</h1>
                <p className="text-[15px] xl:text-[18px] mt-4 font-normal text-gray-400 text-center">Woher stammst du? Was führt dich hierher? Wie ist überhaupt dein Name?! Ob Anführer einer neuen Revolution oder einfacher Kopfgeldjäger - bestimme selbst, wo deine Reise hin gehen soll!
                </p>

                <div className="flex mt-8 relative z-50 mx-auto xl:w-3/4 w-5/6">
                    {team && team.map((member: any, index: any) => (
                        <TeamHead  key={index} username={member.username} rank={member.rank_name} bio={member.bio} twitter={member.twitter_handle} />
                    ))}
                </div>

                <div className="flex mt-8 relative z-50 mx-auto xl:w-2/4 w-5/6">
                    <div className=" mx-auto grid grid-cols-2 gap-x-2">
                    <a href="/apply"
                       className="text-black px-8 py-3 uppercase rounded-md mx-auto my-auto bg-bal-yellow-darker text-black/80 hover:bg-bal-yellow border-[#7E89B1] text-sm font-medium">Offene
                        Positionen</a>
                    <a href="/apply"
                       className=" px-8 py-3 rounded-md bg-black text-white/80 border-2 mx-auto my-auto hover:bg-white/5 border-[#7E89B1]/70 text-sm font-medium">TEAM KENNENLERNEN</a>
                    </div>
                    </div>
            </div>

        </main>
    )
}
