import GitHubLogo from "./logos/GitHubLogo";
import LinkedInLogo from "./logos/LinkedInLogo";
import SpotifyLogo from "./logos/SpotifyLogo";
import TwitchLogo from "./logos/TwitchLogo";
import YouTubeLogo from "./logos/YouTubeLogo";

const HeadBar = () => {
    return (
        <header className="my-2 w-100 h-12 bg-[#333533] rounded-full flex flex-row place-self-start
        fixed border-transparent">
            <div className="flex w-screen">
                <p className="w-fit text-[#F5CB5C] font-mono mx-4 text-xl self-center ">
                    $ git clone git:github@VanshSharma14/resume-website.git
                </p>
                <div className="flex ml-auto mr-4 space-x-4 w-auto float-right">
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