import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeadBar from "./components/HeadBar";
import Title from "./components/Title";
import Selfie from "./components/Selfie";
import Timeline from "./components/Timeline";
import Slideshow from "./components/Slideshow";
import GAnalytics from "./components/GAnalytics";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Vansh Sharma</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
      </Head>
      <GAnalytics/>
      <HeadBar/>
      {/* Page 1 */}
      <div className="h-screen w-100 place-content-center bg-[#E8EDDF] flex">
        <div className="flex place-items-center w-100">
          <Title />
          <Selfie className="sm:hidden" />
        </div>
      </div>

      {/* Page 2 */}
      <div className="grid h-screen content-center bg-[#242423]">
        <Timeline/>
      </div>

      {/* Page 3 */}
      <div className="flex flex-col place-content-center min-h-screen w-100 bg-[#CFDBD5]">
          <h1 className="text-center overflow-hidden py-4 text-4xl lg:text-8xl md:text-6xl  text-[#333533] font-bold">PROJECTS</h1>
          <Slideshow />
          <a href='https://drive.google.com/file/d/1s5HixOI4QzvV7Pmn70WMl8f4bgcaZW8r/view?usp=drive_link'><h1 className="text-center py-4 font-bold text-3xl">Click for my resume!</h1></a>
      </div>
    </>
  );
}
