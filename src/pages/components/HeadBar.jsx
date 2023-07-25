const HeadBar = () => {
    return (
        <header className="my-2 w-screen h-10 bg-black rounded-full flex flex-row place-self-start 
        fixed border-transparent">
            <p className="w-fit text-green-400 font-mono mx-4 text-xl self-center ">
                $ git clone git:github@VanshSharma14/resume-website.git
            </p>
            <a className="inline-block" href="https://github.com/VanshSharma14">
                <img
                    className='invert block allign-bottom'
                    src='/static/github.svg'
                    style="display: inline-flex;"
                    height="25"
                    width="25"
                    alt="github logo"
                />
            </a>
        </header>
    );
};

export default HeadBar;