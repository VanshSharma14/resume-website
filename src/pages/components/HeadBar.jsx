import GitHubLogo from "./logos/GitHubLogo";
import LinkedInLogo from "./logos/LinkedInLogo";
import SpotifyLogo from "./logos/SpotifyLogo";
import TwitchLogo from "./logos/TwitchLogo";
import YouTubeLogo from "./logos/YouTubeLogo";

const HeadBar = () => {
    return (
        <header className="my-2 w-screen h-12 bg-[#333533] rounded-full flex flex-row place-self-start
        fixed border-transparent">
            <div className="flex w-screen">
                <p className="w-auto text-[#F5CB5C] font-mono mx-4 text-xl self-center hidden lg:block ">
                    $ git clone git:github@VanshSharma14/resume-website.git
                </p>
                <div className="flex m-auto lg:mr-4 space-x-4 w-auto justify-evenly lg:justify-end">
                    <GitHubLogo />
                    <LinkedInLogo />
                    <SpotifyLogo />
                    <YouTubeLogo />
                    <TwitchLogo />
                </div>
            </div>
        </header>
    );
};

export default HeadBar;