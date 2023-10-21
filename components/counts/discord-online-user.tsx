'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import useFetch from "@/app/hooks/useFetch";
import ContentLoader from "react-content-loader";

export default function DiscordOnlineCount() {

    const [discordShort, setDiscordShort] = useState([] as any)

    const [pageload, setPageload] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => {
            setPageload(false)
        }, 1000);

    }, []);

    const { loading, error, data, refetch } = useFetch({
        url: "https://plexus.baltic-galaxy.de/api/discord_data",
        method: "get",
        key: [],
        cache: {
            enabled: true,
            ttl: 600
        }

    });

    useEffect(() => {
        if (data){
            setDiscordShort(data.data.data);
            console.log(data.data)
        }

    }, [data])


    if (error) {
        return <p>Something went wrong</p>;
    }

    function mobileMenu(e: any) {
        // Grab HTML Elements
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");
        // @ts-ignore
        menu.classList.toggle("hidden");
    }
    return (
            <div className="hidden xl:flex min-w-52 float-right px-6 py-4 rounded-lg border-gray-700 items-center border z-50 space-x-5">
                <a className="flex hover:text-gray-200" href={(loading ? 0: discordShort.instant_invite)}>
                    <Image width={30} height={30} alt="lol" src="/assets/images/icons/discord-mark-white.svg"
                           className="h-8 w-8"/>
                    <span className="ml-2 mt-1">{pageload ?
                        <Image width={32} height={32} alt="lol" src="/assets/images/icons/spinner/loading-1.svg"
                                 className="h-8 -mt-1 inline-block w-4"/>: <><b>{discordShort.presence_count}</b></>} Spieler online</span>
                </a>

            </div>
    );
}