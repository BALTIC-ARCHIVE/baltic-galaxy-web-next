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
import {wait} from "next/dist/build/output/log";


export default function Home() {
    const [team, setTeam] = useState([] as any)
    const [articles, setArticles] = useState([] as any)
    const router = useRouter()
    const [inputs, setInputs] = useState({} as any);



    const blogArticles = useFetch({
        url: "https://plexus.baltic-galaxy.de/api/articles_3",
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

    const handleClick = (event: any) => {
        navigator.clipboard.writeText("baltic-galaxy.de").then(r => {
            window.document.getElementById('tooltip')?.classList.add("has-tooltip");
            setTimeout(() => {
                window.document.getElementById('tooltip')?.classList.remove("has-tooltip");
            }, 500);
        });
    }
    const handleClick2 = (event: any) => {
        navigator.clipboard.writeText("baltic-galaxy.de").then(r => {
            window.document.getElementById('tooltip2')?.classList.add("has-tooltip");
            setTimeout(() => {
                window.document.getElementById('tooltip2')?.classList.remove("has-tooltip");
            }, 500);
        });
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
        <main className="flex justify-center mx-auto  min-h-screen overflow-x-hidden flex-col items-center justify-between">
            <div className=" lg:h-[70vh] h-[60vh] bg-cover bg-no-repeat relative bg-bg-hoth bg-bottom border-r border-white w-full ">
                <div className="mt-24 max-w-[1200px] mx-auto">
                    <div className="lg:w-5/6 w-6/6">
            <a href="https://baltic-studios.de/apply"
                className="xl:px-[20px] py-[7px] h-1 text-bal-yellow-darker bg-black/10 font-bold border border-white/20 lg:text-[14px] text-[12px] rounded-full group hover:cursor-pointer">Wir suchen Verstärkung - Jetzt bewerben
                <Image
                height={20} width={20} alt="alt"
                className="inline transition-all ease-in-out group-hover:ml-3 ml-2 h-4 w-4"
                src="/assets/images/icons/arrow_right_yellow.svg"/></a>
                        <h1 className=" mt-5 lg:text-[52px] text-[25px] lg:w-5/6 w-6/6 font-medium">TAUCHE EIN IN EIN STAR WARS ABENTEUER</h1>
                        <div className="hr w-2/4"></div>
                        <p className="mt-10 mb-10 lg:w-4/6 text-[18px] text-white">
                            Trete dem Imperium oder der Neuen Republik bei und kämpfe in Schlachten um ganze Flotten in
                            vorderster Front! </p>

                        <a
                            className="lg:px-8 flex-nowrap lg:py-4 px-4 py-2 rounded-md bg-bal-yellow-darker text-black/80 hover:bg-bal-yellow border-[#7E89B1] text-sm font-medium mr-5"
                            href="https://discord.gg/6UKwkjgU5e">DISCORD BEITRETEN</a>
                        <div id="tooltip" className="lg:inline hidden relative">
                            <a onClick={handleClick}
                               className="lg:px-8 lg:py-4 px-4 py-2 hidden lg:inline flex-nowrap rounded-md hover:cursor-pointer bg-black text-white/80 border-2  hover:bg-black/70 border-[#7E89B1]/70 text-sm font-medium mr-5"
                            >SERVERADRESSE KOPIEREN</a>
                            <div className='tooltip p-1  left-16 rounded bg-black'>Adresse kopiert!</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="xl:w-3/4 w-full bg-black pb-16 mt-8 grid max-w-[1200px] mx-auto lg:gap-x-22 lg:grid-cols-2 grid-cols-1">
                <div className="my-auto lg:w-4/6 w-full">
                    <h1 className="text-[32px] font-medium">WAS IST BALTIC GALAXY?</h1>
                    <div className="hr w-1/2"></div>
                    <p className="mt-8 mb-8 text-[18px] text-gray-400">

                        Durchquere eine Vielzahl von spannenden Quests, erbaue deine Heimat, erobere Schlachtschiffe mit deiner Fratkion und mache dir einen Namen. Alles begleitet von talentierten Synchronsprecher/innen und hauseigenen Soundtracks! Lust auf ein unvergessliches Abenteuer? Dann los! </p>
                    <a
                        className="px-8 py-4 rounded-md bg-bal-yellow-darker text-black/80 hover:bg-bal-yellow border-[#7E89B1] text-sm font-medium mr-5"
                        href="/discover">ENTDECKEN</a>
                </div>
                <div className=" bg-bg-kessel2 bg-center bg-200% bg-no-repeat rounded-xl mt-10 lg:mt-0 w-full h-[400px] lg:h-[800px]">
                </div>
            </div>


            <div className="xl:w-3/4 w-full bg-black pb-16 mt-8 max-w-[1200px] mx-auto grid  gap-x-12 lg:grid-cols-2 grid-cols-1">
                <div className="my-auto float-left">
                    <Image
                        height={2000} width={2000} alt="alt"
                        className=""
                        src="/assets/images/minecraft-server.png"/>
                </div>
                <div className="my-auto ">
                    <h1 className="text-[32px] font-medium">TRAGE UNS JETZT IN DEINE SERVERLISTE EIN!</h1>
                    <div className="hr w-1/2"></div>
                    <p className="mt-8 mb-8 text-[18px] text-gray-400">Tauche direkt in dein Abenteuer! Trotz unserer einzigartigen Systeme, benötigst du keine Mods. Alles weitere wird dir auf dem Server mit interaktiven Geschichten erzählt.</p>
                    <div id="tooltip2" className="lg:inline hidden relative">
                        <a onClick={handleClick2}
                            className="px-8 py-4 rounded-md bg-bal-yellow-darker text-black/80 hover:bg-bal-yellow border-[#7E89B1] text-sm font-medium mr-5">SERVER ADRESSE KOPIEREN</a>
                        <div className='tooltip p-1  left-16 rounded bg-black'>Adresse kopiert!</div>
                    </div>
                </div>
            </div>

            <div className="xl:w-3/4 w-full max-w-[1200px] mx-auto mt-8">
                <h1 className="text-[32px] mb-4 font-medium">Immer auf dem aktuellsten Stand bleiben</h1>
                <div className="hr w-2/12"></div>
                <div className="py-16 grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {articles && articles.map((post: any, index4: any) => (
                        <BlogPostCard key={index4}
                            postTitle={post.title}
                            postDesc={post.short_text}
                            postImgUrl={post.cover_url}
                            postSlug={post.slug}
                        />
                        ))}
                </div>
            </div>

            <div className="mt-20 xl:mt-40 max-w-[1200px] mx-auto py-8 mx-auto grid grid-cols-1 xl:grid-cols-2">
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
                            Wir möchten dich in eine atemberaubende Welt abtauchen lassen. Dafür braucht es mehr als eine große Leinwand. Seit Monaten arbeiten wir eng mit dem talentierten Komponisten Alexander Rose zusammen, um dir unsere eigenen Soundtracks zu präsentieren! Höre dir erste Proben an.
                        </p>
                    </div>
                    <a href="https://open.spotify.com/intl-de/artist/6IdCbImU2IB3E2sxaT8qNP?si=p1af8TfJROqjCPT_dR6RFQ" className="text-bal-blue py-2 cursor-pointer group">Demnächst auf Spotify <Image
                        height={20} width={20} alt="alt"
                        className="inline transition-all ease-in-out group-hover:ml-3 ml-2 h-4 w-4"
                        src="/assets/images/icons/arrow_right_gray.svg"/></a>
                </div>

                <AudioListGroup />
            </div>

            <div className="heading relative h-[75vh] mb-36 lg:h-[65vh] max-w-[1200px] mx-auto">
                <h4 className="mt-32 text-gradient-blue text-[18px] xl:mt-52 text-center">JETZT TEIL DES TEAMS WERDEN!</h4>
                <h1 className="text-[35px] xl:text-[52px] font-medium mt-0 text-center">ENTFALTE DEINE KREATIVITÄT FÜR AUFREGENDE PROJEKTE</h1>
                <p className="text-[15px] xl:text-[18px] mt-4 font-normal text-gray-400 text-center">
                    Seit nun mehreren Jahren arbeiten wir als talentiertes Team daran, dir eine unvergessliche Zeit zu erschaffen. Wir schreiben, denken, entwickeln, designen, bauen, komponieren, modellieren und investieren all unsere Leidenschaft in unseren aktuellen, sowie zukünftigen Projekten. Du möchtest ein Teil davon sein? Dann nichts wie ab!
                </p>

                <div className="flex mt-8 relative z-50 mx-auto xl:w-4/4 w-full">
                    <div className="mx-auto">
                    {team && team.map((member: any, index: any) => (
                        <TeamHead  key={index} username={member.username} rank={member.rank_name} bio={member.bio} twitter={member.twitter_handle} />
                    ))}
                    </div>
                </div>

                <div className="flex mt-8 relative z-50 mx-auto xl:w-2/4 w-5/6">
                    <div className=" mx-auto grid grid-cols-2 gap-x-2">
                    <a href="https://www.baltic-studios.de/apply"
                       className="text-black lg:px-8 lg:py-4 px-4 py-2 uppercase rounded-md mx-auto my-auto bg-bal-yellow-darker text-black/80 hover:bg-bal-yellow border-[#7E89B1] text-sm font-medium">Offene
                        Positionen</a>
                    <a href="https://www.baltic-studios.de/about-us"
                       className=" lg:px-8 lg:py-4 px-4 py-2 rounded-md bg-black text-white/80 border-2 mx-auto my-auto hover:bg-white/5 border-[#7E89B1]/70 text-sm font-medium">TEAM KENNENLERNEN</a>
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
