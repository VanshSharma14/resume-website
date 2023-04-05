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
        <header className="grid m-1 h-10 w-full bg-black border-4 rounded-full place-self-start fixed border-transparent ease-in duration-100 hover:bg-white">
          <p className="hover:text-green-700 text-green-400 font-mono align-middle pl-4 text-xl self-center ">
            $git clone git:github@VanshSharma14
          </p>
        </header>
        <div className="container mx-auto flex flex-col place-items-center place-content-center">
          <p className="tracking-tighter text-8xl font-bold ease-in duration-100 hover:text-9xl">
            Hi, I'm Vansh
          </p>
          <p className="text-2xl font-bold ease-in duration-100 hover:text-4xl">
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
