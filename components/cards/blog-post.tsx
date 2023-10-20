'use client';
import Image from 'next/image'
import {IoPlay} from "react-icons/io5";
import {useEffect, useState} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import InputGroup from "@/components/utils/InputGroup";
import InputTextArea from "@/components/utils/InputTextArea";
import {useRouter} from "next/navigation";


export default function BlogPostCard({postTitle, postDesc, postImgUrl, postSlug  }: any) {


    return (
        <motion.div  whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.9 }} className=" hover:scale-105 cursor-pointer transition-all ease">
            <a href={'/blog/' + postSlug}>
                <div className="relative z-10 bg-blog-article-gradient">
                    <Image alt="image" height={1000} width={2000} className="z-10 w-full rounded-lg" src={postImgUrl} />
                </div>
            </a>

                <div className="py-5 h-52 z-50 relative">
                    <a href={'/blog/' + postSlug}>
                    <h1 className=" text-[#e8e9e8] mb-4 text-xl">{postTitle}</h1>
                    <div className="text-white hr w-1/4"></div>
                    <p className="text-gray-400 mt-8">{postDesc}</p>
                    </a>
                    <a href={'/blog/' + postSlug} className="mt-4 inline-flex justify-center rounded-lg text-sm text-[17px] font-semibold  text-white uppercase hover:cursor-pointer">WEITERLESEN</a>
                </div>
        </motion.div>
    )
}
