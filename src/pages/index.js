import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="grid h-screen w-screen flex">
        <header className="grid m-2 h-10 w-full bg-black border-4 rounded-full flex flex-row place-self-start fixed border-transparent ease-in duration-300 hover:bg-white">
          <p className="ease-in duration-300 hover:text-green-700 text-green-400 font-mono align-middle pl-4 text-xl self-center ">
            $ git clone git:github@VanshSharma14/resume-website.git
          </p>
        </header>
        <div className="container mx-auto flex flex-col place-items-center place-content-center">
          <h1 className="tracking-tighter text-8xl font-bold">
            Hi, I'm Vansh
          </h1>
          <p className="text-3xl font-bold">
            Software Engineer
          </p>
        </div>
      </div>

      <div className="grid h-screen w-screen flex place-items-center content-center bg-black">
        <p className="font-mono text-white text-8xl"> BALLZZ</p>
        <p className="font-mono text-white text-8xl"> UR MOM AND UR DAD</p>
      </div>
    </>
  );
}
