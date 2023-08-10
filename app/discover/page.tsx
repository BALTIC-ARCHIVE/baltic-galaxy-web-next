'use client';
import Image from 'next/image'
import {IoPlay} from "react-icons/io5";
import {useEffect, useState} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import InputGroup from "@/components/utils/InputGroup";
import InputTextArea from "@/components/utils/InputTextArea";
import {useRouter} from "next/navigation";


export default function Home() {
    const router = useRouter()


    return (
        <main className="flex justify-center min-h-screen flex-col items-center justify-between">
            <div className="header w-full h-[100vh] bg-header-radial px-4 xl:px-0 justify-center items-center">
                <h1 className="text-[40px] xl:text-[60px] text-center font-bold mt-20">Ein Universum<br/>voller Ideen</h1>
                <h4 className="text-[14px] xl:text-[18px] mt-4 font-normal text-center">Wir schaffen großartiges für Augen und Ohren. Möchtest du Teil der Reise sein?</h4>

                <div className="flex justify-center mt-12 relative z-50">
                    <Link href="/about-us"
                          className="text-black/70 px-8 py-4 rounded-md bg-[#00FFA3] text-black border-[#7E89B1] text-sm font-medium mr-5">OFFENE POSITIONEN</Link>
                </div>


            </div>

        </main>
    )
}
