import Script from 'next/script'

const Footer = () => {
    return (
        // A footer using tailwind that sits in the bottom of the page and the background color is 333533
        // Text is White and the font is Montserrat
        <div className="footer absolute w-full bottom-0 h-32 bg-[#333533] flex flex-row">
            {/* A div that contains the text */}
            <div className="flex flex-col m-auto">
                <p className="text-white font-mono text-lg">I just wanted to look cool doing this 😩</p>
                <p className="text-white font-mono text-lg">© 2024 Vansh Sharma. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
