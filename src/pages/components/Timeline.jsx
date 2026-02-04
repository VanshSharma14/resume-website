import { useEffect, useRef, useState } from "react";

const Timeline = () => {
    const scrollRef = useRef(null);
    const [showFade, setShowFade] = useState(false);

    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;

        const updateFade = () => {
            const hasOverflow = element.scrollHeight > element.clientHeight + 1;
            const atBottom = element.scrollTop + element.clientHeight >= element.scrollHeight - 2;
            setShowFade(hasOverflow && !atBottom);
        };

        updateFade();
        element.addEventListener("scroll", updateFade);
        window.addEventListener("resize", updateFade);

        return () => {
            element.removeEventListener("scroll", updateFade);
            window.removeEventListener("resize", updateFade);
        };
    }, []);

    return (
        <div className="md:scale-100 w-10/12 md:w-7/12 lg:6/12 mx-auto my-10">
            <h1 className="text-3xl text-center font-bold text-[var(--color-light-variant)]">My Career</h1>
            <div className="relative mt-10">
                <div ref={scrollRef} className="timeline-scroll border-l-2 border-[var(--color-light-variant)] pr-2">

                {/* <!-- Card 0 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[var(--color-gold)] text-[var(--color-dark)] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[var(--color-gold)] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-xl">
                            <font color="#4285F4">G</font>
                            <font color="#EA4335">o</font>
                            <font color="#FBBC05">o</font>
                            <font color="#34A853">g</font>
                            <font color="#4285F4">l</font>
                            <font color="#EA4335">e</font>
                            {" "}Workspace - Sunnyvale, CA
                        </h1>
                        <h1 className="text-xl font-bold">Software Engineer</h1>
                        <h3>May 2025 - Current</h3>
                    </div>
                    <section href="#" className="text-center text-[var(--color-dark)]">Full-Stack</section>
                </div>

                {/* <!-- Card 1 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[var(--color-gold)] text-[var(--color-dark)] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[var(--color-gold)] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-xl">
                            <font color="#4285F4">G</font>
                            <font color="#EA4335">o</font> 
                            <font color="#FBBC05">o</font> 
                            <font color="#34A853">g</font>
                            <font color="#4285F4">l</font>
                            <font color="#EA4335">e </font>
                            - Sunnyvale, CA
                        </h1>
                        <h1 className="text-xl font-bold">Software Engineer Intern</h1>
                        <h3>Summer 2024</h3>
                    </div>
                    <section href="#" className="text-center text-[var(--color-dark)]">SAML, Full Stack, Systems Design</section>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[var(--color-gold)] text-[var(--color-dark)] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[var(--color-gold)] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-lg">ETS - Princeton, NJ</h1>
                        <h1 className="text-xl font-bold">Technology Intern</h1>
                        <h3>Summer 2023</h3>
                    </div>
                    <section href="#" className="text-center text-[var(--color-dark)]">CI/CD & CDK Architecture</section>
                </div>

                {/* <!-- Card 3 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex place-items-center px-6 py-4 bg-[var(--color-gold)] text-[var(--color-dark)] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[var(--color-gold)] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-lg">Hack4Impact - Rutgers Chapter</h1>
                        <h1 className="text-xl font-bold">Backend Director, Project Lead</h1>
                        <h3>Sep 2022 - May 2024</h3>
                    </div>
                    <section href="#" className="text-center text-[var(--color-dark)]">Full Stack</section>
                </div>

                {/* <!-- Card 4 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[var(--color-gold)] text-[var(--color-dark)] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[var(--color-gold)] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-lg">MITRE - Bedford, MA</h1>
                        <h1 className="text-xl font-bold">Software Engineer Intern</h1>
                        <h3>May 2022 - January 2023</h3>
                    </div>
                    <section href="#" className="text-center text-[var(--color-dark)]">Microservices</section>
                </div>

                {/* <!-- Card 5 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[var(--color-gold)] text-[var(--color-dark)] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[var(--color-gold)] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-lg">Dunkin&apos;</h1>
                        <h1 className="text-xl font-bold">Shift Leader</h1>
                        <h3>Sep 2019 - 2023</h3>
                    </div>
                    <section href="#" className="text-center text-[var(--color-dark)]">Management</section>
                </div>
                </div>
                {showFade && <div className="timeline-fade" aria-hidden="true" />}
            </div>
            <section className="mt-4 text-xl text-center text-[var(--color-light-variant)]">But the journey doesn&apos;t end there 🚀</section>
        </div>
    );
};

export default Timeline;
