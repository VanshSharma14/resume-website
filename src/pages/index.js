import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeadBar from "./components/HeadBar";
import IG from "./components/IG";

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
        <HeadBar/>
        <div className="container mx-auto w-screen flex flex-col place-items-center place-content-center">
          <h1 className="tracking-tighter text-8xl font-bold">
            Hi, I'm Vansh
          </h1>
          <p className="text-3xl font-bold">
            Software Engineer
          </p>
        </div>
      </div>

      <div className="grid h-screen w-screen place-items-center content-center bg-black">
        <IG></IG>
        <p className="font-mono text-white text-2xl"> Website still under construction 👷</p>
      </div>
    </>
  );
}
