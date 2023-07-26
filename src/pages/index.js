import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeadBar from "./components/HeadBar";
import Title from "./components/Title";
import Selfie from "./components/Selfie";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="h-screen w-100 bg-[#E8EDDF] flex">
        <HeadBar/>
        <div className="flex place-items-center m-0 w-100">
        <Title />
        <Selfie />
        </div>
      </div>

      <div className="grid h-screen place-items-center content-center bg-[#242423]">
        <p className="font-mono text-white text-2xl"> Website still under construction 👷</p>
      </div>
    </>
  );
}
