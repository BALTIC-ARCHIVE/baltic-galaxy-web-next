'use client';
import Image from "next/image";
import AudioListItem from "@/components/audio-list-item/comp";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import useFetch from "@/app/hooks/useFetch";


export default function AudioListGroup() {
    const [tracks, setTracks] = useState([] as any)



/*    const audioList = useFetch({
        url: "https://plexus.baltic-galaxy.de/api/tracks",
        method: "get",
        key: [],
        cache: {
            enabled: true,
            ttl: 10000
        }
    }).data;

    useEffect(() => {
        if (audioList){
            setTracks(audioList.data);
        }

    }, [audioList])*/


    // @ts-ignore
    return (
        <div className="h-fit rounded-2xl">
            <ul>
{/*                {tracks && tracks.map((track: any, index2: any) => (
                    <AudioListItem key={index2} title={track.title} author={track.author} duration="2:30"
                                   audioUrl={track.audioUrl}/>
                ))}*/}

                <AudioListItem
                    title={'Adventure Awaits'}
                    author={'Alexander Rose'}
                    duration={'2:30'}
                    audioUrl={'https://plexus.baltic-galaxy.de/assets/audio/adventure_awaits.mp3'}
                />
                <AudioListItem
                    title={'Into the Deep'}
                    author={'Alexander Rose'}
                    duration={'2:30'}
                    audioUrl={'https://plexus.baltic-galaxy.de/assets/audio/adventure_awaits.mp3'}
                />
                <AudioListItem
                    title={'Confrontation on Ash'}
                    author={'Alexander Rose'}
                    duration={'2:30'}
                    audioUrl={'https://plexus.baltic-galaxy.de/assets/audio/adventure_awaits.mp3'}
                />
                <AudioListItem
                    title={'Inspect the Ruins'}
                    author={'Alexander Rose'}
                    duration={'2:30'}
                    audioUrl={'https://plexus.baltic-galaxy.de/assets/audio/adventure_awaits.mp3'}
                />
                <AudioListItem
                    title={'Glowing Darkness'}
                    author={'Alexander Rose'}
                    duration={'2:30'}
                    audioUrl={'https://plexus.baltic-galaxy.de/assets/audio/adventure_awaits.mp3'}
                />

            </ul>

        </div>
    );
}