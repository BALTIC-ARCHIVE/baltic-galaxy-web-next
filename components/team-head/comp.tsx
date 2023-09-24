'use client';
import Image from "next/image";


export default function TeamHead({username, rank, bio, twitter}: any) {

    function getImageUrl(userName: string): any {
        return (
            'https://cravatar.eu/helmavatar/' + userName + '/250.png'
        );
    }
    // @ts-ignore
    return (
        <div className="inline">
            <Image
                height={64} width={64} alt="alt"
                className="inline transition-all ease-in-out mx-2 rounded h-12 w-12"
                src={getImageUrl(username)}/>
        </div>
    );
}