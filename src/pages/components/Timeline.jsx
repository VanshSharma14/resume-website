const Timeline = () => {
    return (
        <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
            <h1 className="text-3xl text-center font-bold text-[#CFDBD5]">My Career</h1>
            <div className="border-l-2 mt-10">
                {/* <!-- Card 1 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#F5CB5C] text-[#333533] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[#F5CB5C] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-lg">ETS - Princeton, NJ</h1>
                        <h1 className="text-xl font-bold">Technology Intern</h1>
                        <h3>Summer 2023</h3>
                    </div>
                    <section href="#" className="text-center text-[#333533]">CI/CD & CDK Architecture</section>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#F5CB5C] text-[#333533] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[#F5CB5C] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-lg">Hack4Impact - Rutgers Chapter</h1>
                        <h1 className="text-xl font-bold">Backend Director, Project Lead</h1>
                        <h3>September 2022 - Current</h3>
                    </div>
                    <section href="#" className="text-center text-[#333533]">Full Stack</section>
                </div>

                {/* <!-- Card 3 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#F5CB5C] text-[#333533] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[#F5CB5C] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-lg">MITRE - Bedford, MA</h1>
                        <h1 className="text-xl font-bold">Software Engineer Intern</h1>
                        <h3>May 2022 - January 2023</h3>
                    </div>
                    <section href="#" className="text-center text-[#333533]">Microservices</section>
                </div>

                {/* <!-- Card 4 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#F5CB5C] text-[#333533] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[#F5CB5C] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-lg">Dunkin'</h1>
                        <h1 className="text-xl font-bold">Shift Leader</h1>
                        <h3>Septermber 2019 - Current</h3>
                    </div>
                    <section href="#" className="text-center text-[#333533]">Management</section>
                </div>
            </div>
            <section className="mt-4 text-xl text-center text-[#CFDBD5]">But the journey doesn't end there 🚀</section>
        </div>
    );
};

export default Timeline;