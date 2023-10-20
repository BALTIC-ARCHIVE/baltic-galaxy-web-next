'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import useFetch from "@/app/hooks/useFetch";
import DiscordOnlineCount from "@/components/counts/discord-online-user";

export default function Navbar() {

    function mobileMenu(e: any) {
        // Grab HTML Elements
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");
        // @ts-ignore
        menu.classList.toggle("hidden");
    }

    return (
        <nav
            className="hidden relative xl:block z-50 bg-gradient-radial-bottom bg-no-repeat bg-[left_top_0rem] from-[#566fcc]/25 via-[#010203]/100 to-[#010203]">
            <div className="px-[20px] flex justify-between h-20 bg-transparent text-white">
                <div className="px-5 xl:px-40 py-6 absolute  w-full">
                    <div className="hidden xl:flex items-center z-50 space-x-5">
                        <a className="flex hover:text-gray-200" href="https://www.tiktok.com/@balticgalaxy">
                            <Image width={25} height={25} alt="lol" src="/assets/images/tiktok.svg"
                                   className="h-6 w-6"/>
                        </a>
                        <a className="flex items-center hover:text-gray-200" href="https://twitter.com/BalticGalaxy">
                            <Image width={25} height={25} alt="lol" src="/assets/images/twitter.svg"
                                   className="h-6 w-6"/>
                        </a>

                        <a className="flex items-center hover:text-gray-200" href="https://www.youtube.com/@balticstudios9008">
                            <Image width={25} height={25} alt="lol" src="/assets/images/youtube.svg"
                                   className="h-6 w-6"/>
                        </a>

                    </div>
                    <div className="hidden xl:flex float-right px-3 py-4 rounded-lg border-gray-700 items-center border z-50 space-x-5">
                        <a className="flex hover:text-gray-200" href="https://www.tiktok.com/@balticgalaxy">
                            <Image width={30} height={30} alt="lol" src="/assets/images/icons/discord-mark-white.svg"
                                   className="h-8 w-8"/>
                            <span className="ml-2 mt-1"><DiscordOnlineCount /> <b>Spieler</b> online</span>
                        </a>

                    </div>
                </div>
            </div>
            <div className="flex -mt-9 justify-between text-white">
                <div className="px-5 xl:px-12 pb-6 flex w-full">
                    <ul className="flex mx-auto space-x-12">
                        <Image
                            src="/assets/logo.png"
                            alt="BALTIC GALAXY LOGO"
                            width={200}
                            height={48}
                            priority
                        />
                    </ul>
                </div>
            </div>
            <div className="flex justify-between border-[#303545] border-b">
                <div className="mx-auto max-w-7xl">
                    <div className="relative flex h-10 items-center justify-between">
                        <div className=" mx-auto sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="/" className="text-white px-3 py-2 nav-link text-sm font-medium"
                                   aria-current="page">STARTSEITE</a>

                                <a href="/discover"
                                   className="text-white px-3 py-2 nav-link rounded-md text-sm font-medium">ENTDECKEN <span className="px-[6px] py-[3px] h-1 bg-red-600 font-bold text-[10px] rounded">NEU</span></a>

                                <a href="/blog" className="text-white px-3 py-2 nav-link rounded-md text-sm font-medium">BLOG</a>
                                <a href="https://baltic-studios.de/apply" className="text-white px-3 py-2 nav-link rounded-md text-sm font-medium">BEWERBEN</a>

{/*                                <a href="#"
                                   className="text-white px-3 py-2 nav-link rounded-md text-sm font-medium">FRAKTIONEN</a>

                                <a href="#"
                                   className="text-white px-3 py-2 nav-link rounded-md text-sm font-medium">SPIELERPORTAL</a>

                                <a href="#"
                                   className="text-white px-3 py-2 nav-link rounded-md text-sm font-medium">WIKI</a>

                                <a href="#"
                                   className="text-white px-3 py-2 nav-link rounded-md text-sm font-medium">
                                    MEDIATHEK
                                </a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}