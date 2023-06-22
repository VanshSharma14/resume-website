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
      <div className="h-screen w-screen flex">
        <header className="my-2 h-10 w-screen bg-black rounded-full flex flex-row place-self-start 
        fixed border-transparent">
          <p className="w-fit text-green-400 font-mono mx-4 text-xl self-center ">
            $ git clone git:github@VanshSharma14/resume-website.git
          </p>
            <a className="inline-block" href="https://github.com/VanshSharma14">
              <img 
                className='invert block allign-bottom' 
                src='/static/github.svg'
                height="25" 
                width="25"
                alt="github logo"
              />
            </a>
        </header>
        <div className="container mx-auto w-screen flex flex-col place-items-center place-content-center">
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
