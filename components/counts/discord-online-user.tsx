'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import useFetch from "@/app/hooks/useFetch";

export default function DiscordOnlineCount() {

    const [discord, setDiscord] = useState([] as any)
    const [dataLoaded, setDataLoaded] = useState(false);

    const { loading, error, data, refetch } = useFetch({
        url: "https://discord.com/api/guilds/881606189782274090/widget.json",
        method: "get",
        key: [],
        cache: {
            enabled: true,
            ttl: 600
        }

    });

    useEffect(() => {
        if (data){
            setDiscord(data.data);
            console.log(data)
        }

    }, [data])

    const handleDataLoad = () => {
        setDataLoaded(true);
    }

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
        <>
        <b> {loading ?  0 : discord.presence_count}</b>
        </>
    );
}