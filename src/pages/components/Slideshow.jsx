const Slideshow = () => {
    return (
        <div className='place-content-center flex flex-wrap gap-6' >
            
            <div className="max-w-sm bg-[var(--color-dark-bold)] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/static/coming soon.jpeg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[var(--color-light)]">Pizza Pal</h5>
                    </a>
                    <p className="mb-3 font-normal text-[var(--color-light)]">Full feature pizza shop menu and order management system built on Android Studio and Java. [Repo private while project is being reconstructed with more features]</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[var(--color-gold)] rounded-lg hover:bg-[#e6ad0f] focus:ring-4 focus:outline-none focus:ring-[#fae7b2]">
                        Private 🔒
                    </a>
                </div>
            </div>

            <div className="max-w-sm bg-[var(--color-dark-bold)] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/static/cca_slide.png" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[var(--color-light)]">CombinedCommunityAction</h5>
                    </a>
                    <p className="mb-3 font-normal text-[var(--color-light)]">Partnered with the non-profit CombinedCommunityAction to create a full-stack pet food ordering tracking and delivery system for pet owners
                                                                    that are unable to afford food for their pets.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[var(--color-gold)] rounded-lg hover:bg-[#e6ad0f] focus:ring-4 focus:outline-none focus:ring-[#fae7b2]">
                        Private 🔒
                    </a>
                </div>
            </div>

            <div className="max-w-sm bg-[var(--color-dark-bold)] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="https://github.com/VanshSharma14/vim-loader">
                    <img className="rounded-t-lg" src="/static/vim-loader1.png" alt="" />
                </a>
                <div className="p-5">
                    <a href="https://github.com/VanshSharma14/vim-loader">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[var(--color-light)]">Vim Loader</h5>
                    </a>
                    <p className="mb-3 font-normal text-[var(--color-light)]">A quick, open-source, & portable IDE for a lightweight customized Vim8 environment set up almost instantly!</p>
                    <a href="https://github.com/VanshSharma14/vim-loader" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[var(--color-gold)] rounded-lg hover:bg-[#e6ad0f] focus:ring-4 focus:outline-none focus:ring-[#fae7b2]">
                        Read more
                    </a>
                </div>
            </div>


            <div className="max-w-sm bg-[var(--color-dark-bold)] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="https://github.com/VanshSharma14/Car-Soccer">
                    <img className="rounded-t-lg" src="/static/car-soccer.png" alt="" />
                </a>
                <div className="p-5">
                    <a href="https://github.com/VanshSharma14/Car-Soccer">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[var(--color-light)]">Car Soccer</h5>
                    </a>
                    <p className="mb-3 font-normal text-[var(--color-light)]">A retro 2D replica of Rocket League featuring a dynamic UI, complex hitbox manipulation and 2 player support!</p>
                    <a href="https://github.com/VanshSharma14/Car-Soccer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[var(--color-gold)] rounded-lg hover:bg-[#e6ad0f] focus:ring-4 focus:outline-none focus:ring-[#fae7b2]">
                        Read more
                    </a>
                </div>
            </div>

            <div className="max-w-sm bg-[var(--color-dark-bold)] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="https://github.com/VanshSharma14/Stock-Double-Bottom-Checker">
                    <img className="rounded-t-lg" src="/static/double-bottom.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="https://github.com/VanshSharma14/Stock-Double-Bottom-Checker">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[var(--color-light)]">Stock Double-Bottom Tracker</h5>
                    </a>
                    <p className="mb-3 font-normal text-[var(--color-light)]">[Deprecated] Java application that utilizes Yahoo! Finance API to extract stock data and identifies double bottom trends.</p>
                    <a href="https://github.com/VanshSharma14/Stock-Double-Bottom-Checker" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[var(--color-gold)] rounded-lg hover:bg-[#e6ad0f] focus:ring-4 focus:outline-none focus:ring-[#fae7b2]">
                        Read more
                    </a>
                </div>
            </div>

            <div className="max-w-sm bg-[var(--color-dark-bold)] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="https://github.com/VanshSharma14/LegBot">
                    <img className="rounded-t-lg" src="/static/legbot.png" alt="" />
                </a>
                <div className="p-5">
                    <a href="https://github.com/VanshSharma14/LegBot">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[var(--color-light)]">LegBot</h5>
                    </a>
                    <p className="mb-3 font-normal text-[var(--color-light)]">Discord bot that uses MongoDB, GPT3 and other plugins and commands for a high-utility discord experience.</p>
                    {/* <div className="static bottom-0 left-0"> */}
                    <a href="https://github.com/VanshSharma14/LegBot" className="inline-flex bottom-0 left-0 items-center px-3 py-2 text-sm font-medium text-center text-black bg-[var(--color-gold)] rounded-lg hover:bg-[#e6ad0f] focus:ring-4 focus:outline-none focus:ring-[#fae7b2]">
                        Read more
                    </a>
                    {/* </div> */}
                </div>
            </div>

            <div className="max-w-sm bg-[var(--color-dark-bold)] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/static/mow.png" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[var(--color-light)]">MealsOnWheels</h5>
                    </a>
                    <p className="mb-3 font-normal text-[var(--color-light)]">Partnered with non-profit organization MealsOnWheels and lead the backend team in creating a full-stack volunteer management system.</p>
                    <a href="https://gregarious-dolphin-16199a.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[var(--color-gold)] rounded-lg hover:bg-[#e6ad0f] focus:ring-4 focus:outline-none focus:ring-[#fae7b2]">
                        Website
                    </a>
                </div>
            </div>
        </div >
    );
};

export default Slideshow;
