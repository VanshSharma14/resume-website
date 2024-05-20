import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import Footer from "./components/Footer";
import GAnalytics from "./components/GAnalytics";
import HeadBar from "./components/HeadBar";
import ProjectCarousel from "./components/ProjectCarousel";
import Selfie from "./components/Selfie";
import Timeline from "./components/Timeline";
import Title from "./components/Title";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Vansh Sharma</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Portfolio - Vansh Sharma" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/thumbnail.jpg" />
      </Head>
      <Script src="https://unpkg.com/tailwindcss-jit-cdn"></Script>
      <Script src="/scripts/removeScroll.js"></Script>
      <GAnalytics />
      <HeadBar className="items-center" />
      {/* Page 1 */}
      <div className="h-screen w-100 place-content-center bg-[#E8EDDF] flex">

        {/* Title + Selfie */}
        <div className="flex place-items-center w-100">
          <Title />
          <Selfie className="sm:hidden" />
        </div>

        {/* Scroll animation */}
        <div className="fadeInStart block absolute bottom-0 w-100 text-center pb-8 ">
          <div className="field">
            <div className="scroll"></div>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div id="career" className="grid min-h-screen content-center bg-[#242423]">
        <Timeline />
      </div>

      {/* Page 3 */}
      {/* <div id="projects" className="flex flex-col place-content-center min-h-screen w-100 bg-[#CFDBD5]">*/}
        {/* <h1 className="text-center overflow-hidden py-4 text-4xl lg:text-8xl md:text-6xl  text-[#333533] font-bold">PROJECTS</h1>
        <Slideshow /> */}
        <div id="projects" className="bg-[#303030] bg-gradient-to-br from-[#E8EDDF] to-[#90b59b] bg-cover relative min-h-screen w-100 flex flex-col content-evenly overflow-hidden">
            <ProjectCarousel />
            <h1 className="text-center absolute top-20 md:top-28 lg:top-52 left-1/2 -translate-x-1/2 py-4 text-4xl lg:text-8xl md:text-6xl text-[#242423] font-bold select-none">PROJECTS</h1>
            <h1 className="text-center absolute bottom-20 md:bottom-28 lg:bottom-52 left-1/2 -translate-x-1/2 py-4 text-6xl lg:text-8xl md:text-6xl text-[#242423] font-bold select-none">⟷</h1>

        </div>
        <script src="/scripts/imageSlider.js"></script>
        <script src="/scripts/bgTransition.js"></script>
        {/* <a href='https://drive.google.com/file/d/1s5HixOI4QzvV7Pmn70WMl8f4bgcaZW8r/view?usp=drive_link'><h1 className="text-center py-4 font-bold text-3xl">Click for my resume!</h1></a> */}

      {/* Page 4 */}
      <div id="footer" className="relative h-screen w-100 bg-[#242423]">
        <div id="content-wrap" className="flex flex-col h-full pt-24 pb-32 w-auto place-content-center">
          <text className="text-4xl text-[#F5CB5C] self-center font-bold text-center font-mono">
            Under Construction 🛠️
          </text>
        </div>
          <Footer />
      </div>
    </>
  );
}
