'use client';
import Image from "next/image";
import AudioListItem from "@/components/audio-list-item/comp";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import useFetch from "@/app/hooks/useFetch";


export default function AudioListGroup() {
    const [tracks, setTracks] = useState([] as any)


    let debugTracks = [{
        "_id": {
            "$oid": "650f602e70006badf3c5f1e3"
        },
        "audioUrl": "https://plexus.baltic-galaxy.de/storage/audio/adventure_awaits.wav",
        "title": "Adventure Awaits",
        "ep": "GALAXY",
        "duration": "0:30",
        "author": "Alexander Rose"
    },
        {
            "_id": {
                "$oid": "650f605670006badf3c5f1e4"
            },
            "audioUrl": "https://plexus.baltic-galaxy.de/storage/audio/into_the_deep.wav",
            "title": "Into the Deep",
            "ep": "GALAXY",
            "duration": "0:30",
            "author": "Alexander Rose"
        },
        {
            "_id": {
                "$oid": "650f606870006badf3c5f1e5"
            },
            "audioUrl": "https://plexus.baltic-galaxy.de/storage/audio/confrontation_on_ash.wav",
            "title": "Confrontation on Ash",
            "ep": "GALAXY",
            "duration": "0:30",
            "author": "Alexander Rose"
        },
        {
            "_id": {
                "$oid": "650f607f70006badf3c5f1e6"
            },
            "audioUrl": "https://plexus.baltic-galaxy.de/storage/audio/inspect_the_ruins.wav",
            "title": "Inspect the Ruins",
            "ep": "GALAXY",
            "duration": "0:30",
            "author": "Alexander Rose"
        },
        {
            "_id": {
                "$oid": "650f608f70006badf3c5f1e7"
            },
            "audioUrl": "https://plexus.baltic-galaxy.de/storage/audio/glowing_darkness.wav",
            "title": "Glowing Darkness",
            "ep": "GALAXY",
            "duration": "0:30",
            "author": "Alexander Rose"
        }];


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

                {debugTracks && debugTracks.map((track: any, index: any) => (
                    <AudioListItem key={index} title={track.title} author={track.author} duration="0:30" audioUrl={track.audioUrl}/>
                ))}

            </ul>

        </div>
    );
}