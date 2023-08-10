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
  const [tracks, setTracks] = useState([] as any)
  const router = useRouter()
  const [inputs, setInputs] = useState({} as any);

  useEffect(() => {
    fetch('https://plexus.baltic-galaxy.de/api/tracks')
        .then((res) => res.json())
        .then((tracks) => {
          setTracks(tracks)
        });
  })


  const handleChange = (event: any) => {
    const name = event.target.name;
    const value: any = event.target.value;
    setInputs((values: any) => ({...values, [name]: value}))
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
    <main className="flex justify-center min-h-screen flex-col items-center justify-between">


    </main>
  )
}
