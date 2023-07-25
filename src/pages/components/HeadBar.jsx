const HeadBar = () => {
    return (
        <header className="my-2 w-screen h-10 bg-black rounded-full flex flex-row place-self-start 
        fixed border-transparent">
            <p className="w-fit text-green-400 font-mono mx-4 text-xl self-center ">
                $ git clone git:github@VanshSharma14/resume-website.git
            </p>
            <a className="inline-flex" href="https://github.com/VanshSharma14" width="25" height="25">
                <img className='invert inline-flex allign-bottom' src='/static/github.svg' height="25" width="25" alt="github logo" />
            </a>
        </header>
    );
};

export default HeadBar;