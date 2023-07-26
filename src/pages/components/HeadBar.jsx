import GitHubLogo from "./logos/GitHubLogo";

const HeadBar = () => {
    return (
        <header className="my-2 w-screen h-10 bg-black rounded-full flex flex-row place-self-start 
        fixed border-transparent">
            <p className="w-fit text-green-400 font-mono mx-4 text-xl self-center ">
                $ git clone git:github@VanshSharma14/resume-website.git
            </p>
            <GitHubLogo className="w-48" />
        </header>
    );
};

export default HeadBar;