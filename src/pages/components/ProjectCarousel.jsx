import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "Car Soccer",
        description: "A retro 2D replica of Rocket League featuring a dynamic UI, complex hitbox manipulation and 2 player support!",
        imageUrl: "/static/car-soccer.jpg",
        // imageUrl: "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        link: "                                             "
    },
    {
        title: "Combined Community Action",
        description: "A web application that connects donors with local food banks to help reduce food waste and feed the hungry.",
        imageUrl: "/static/cca.jpg",
        // imageUrl: "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        link: ""
    },
    {
        title: "LegBot",
        description: "Discord bot that uses MongoDB, GPT3 and other plugins and commands for a high-utility discord experience.",
        imageUrl: "/static/legbot.jpg",
        // imageUrl: "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        link: ""
    },
    {
        title: "Stock Double-Bottom Tracker",
        description: "[Deprecated] Java application that utilizes Yahoo! Finance API to extract stock data and identifies double bottom trends.",
        imageUrl: "/static/double-bottom.jpg",
        // imageUrl: "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        link: ""
    },

    {
        title: "MealsOnWheels",
        description: "A web application that connects donors with local food banks to help reduce food waste and feed the hungry.",
        imageUrl: "/static/mow.jpg",
        // imageUrl: "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        link: ""
    },
    {
        title: "MealsOnWheels",
        description: "A web application that connects donors with local food banks to help reduce food waste and feed the hungry.",
        imageUrl: "/static/vim-loader.jpg",
        // imageUrl: "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
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