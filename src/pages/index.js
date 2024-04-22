import Head from "next/head";
import Script from "next/script";
import { Inter } from "next/font/google";
import HeadBar from "./components/HeadBar";
import Title from "./components/Title";
import Selfie from "./components/Selfie";
import Timeline from "./components/Timeline";
import Slideshow from "./components/Slideshow";
import GAnalytics from "./components/GAnalytics";
import Footer from "./components/Footer";
import ProjectCarousel from "./components/ProjectCarousel";

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
      <div id="projects" className="flex flex-col place-content-center min-h-screen w-100 bg-[#CFDBD5]">
        <div className="img-body">
          {/* <h1 className="text-center overflow-hidden py-4 text-4xl lg:text-8xl md:text-6xl  text-[#333533] font-bold">PROJECTS</h1>
          <Slideshow /> */}
          {/* <ProjectCarousel />
          <Script src="/scripts/imageSlider.js"></Script> */}
        </div>
        {/* <a href='https://drive.google.com/file/d/1s5HixOI4QzvV7Pmn70WMl8f4bgcaZW8r/view?usp=drive_link'><h1 className="text-center py-4 font-bold text-3xl">Click for my resume!</h1></a> */}
      </div>

      {/* Page 4 */}
      <div id="footer" className="relative h-screen w-full bg-[#242423]">
        <text className="text-4xl text-[#F5CB5C] self-center font-bold text-center font-mono">
          Sliiiideee to the left 🛠️
        </text>
        <div id="content-wrap" className="flex flex-col justify-center items-center overflow-clipped">
          {/* Uncomment below if you want to re-enable the "Under Construction" text */}
          <ProjectCarousel />
          <Script src="/scripts/imageSlider.js"></Script>
        </div>
        <Footer className="absolute bottom-0 w-full h-32" />
      </div>

    </>
  );
}
