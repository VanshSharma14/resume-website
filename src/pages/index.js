import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeadBar from "./components/HeadBar";
import Title from "./components/Title";
import Selfie from "./components/Selfie";
import Timeline from "./components/Timeline";
import Slideshow from "./components/Slideshow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
      </Head>
      {/* Page 1 */}
      <HeadBar/>
      <div className="h-screen w-100 place-content-center bg-[#E8EDDF] flex">
        <div className="flex place-items-center w-100">
          <Title />
          <Selfie />
        </div>
      </div>

      {/* Page 2 */}
      <div className="grid h-screen place-items-center bg-[#242423] scale">
        <Timeline className='place-self-center' />
      </div>

      {/* Page 3 */}
      <div className="flex flex-col h-fit place-content-center min-h-screen w-100 bg-[#CFDBD5]">
        <h1 className="text-center py-4 text-8xl text-[#333533] font-bold">PROJECTS</h1>
        <Slideshow />
        <h1 className="text-center py-4 font-bold text-3xl">Click for my resume!</h1>
      </div>
    </>
  );
}
