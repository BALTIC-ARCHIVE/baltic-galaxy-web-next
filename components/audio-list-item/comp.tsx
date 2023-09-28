'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent, useEffect, useState} from "react";
import {IoPlay, IoPause} from "react-icons/io5";

const useAudio = (url: any) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    return [playing, toggle] as const;
};
export default function AudioListItem({audioUrl, title, duration}: any) {
    const [playing, toggle] = useAudio(audioUrl);
    // @ts-ignore
    return (
        <li className="px-8 py-5">
            <div className="inline border border-white/10 rounded p-3 mr-8"
                 onClick={toggle}>
                {playing ? <IoPause className="inline mx-auto" size="24px"/> :
                    <IoPlay className="inline mx-auto" size="24px"/>}
            </div>
            {title}
            <span className="float-right">{duration}</span>
        </li>
    );
}