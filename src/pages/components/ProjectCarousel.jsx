import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "Car Soccer",
        description: "A retro 2D replica of Rocket League featuring a dynamic UI, complex hitbox manipulation and 2 player support!",
        imageUrl: "/static/car-soccer.jpg",
        link: ""
    },
    {
        title: "Combined Community Action",
        description: "A management dashboard for CombinedCommunityAction Inc. that streamlines volunteer, customer, and admin coordination to deliver food to pet owners who can't afford it.",
        imageUrl: "/static/cca.jpg",
        link: ""
    },
    {
        title: "LegBot",
        description: "Discord bot that uses MongoDB, GPT3 and other plugins and commands for a high-utility discord experience.",
        imageUrl: "/static/legbot.jpg",
        link: ""
    },
    {
        title: "Stock Double-Bottom Tracker",
        description: "[HackRU] Java application that utilizes Yahoo! Finance API to extract stock data and identifies double bottom trends.",
        imageUrl: "/static/double-bottom.jpg",
        link: ""
    },

    {
        title: "MealsOnWheels",
        description: "A web application that connects donors with local food banks to help reduce food waste and feed the hungry.",
        imageUrl: "/static/mow.jpg",
        link: ""
    },
    {
        title: "Vim Loader",
        description: "A fast-paced, lightweight IDE for Unix-based terminals that can be set up almost instantly, making it ideal for use in VMs or newly configured terminals",
        imageUrl: "/static/vim-loader.jpg",
        link: ""
    },

    // {
    //     title: "Sample5",
    //     description: "sum about lorem ipsum getting the job done",
    //     // imageUrl: "/static/mow.png",
    //     imageUrl: "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    //     link: ""
    // }
]

const ProjectCarousel = () => {
    return (
        <div id="carousel-flexbox" data-mouse-down-at="0" data-prev-percentage="0">
            {/* a project card with sample props inserted */}
            {projects.map((project, idx) => {
                return (
                    <ProjectCard
                        key={idx}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        link={project.link}
                    />
                );
            })}
        </div>
    );
};

export default ProjectCarousel;