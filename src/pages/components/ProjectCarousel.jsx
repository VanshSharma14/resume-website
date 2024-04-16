import React from 'react';
import ProjectCard from './ProjectCard';
import css from 'styled-jsx/css';
import '@styles/globals.css';

const projects = [
    {
        title: "Car Soccer",
        description: "A retro 2D replica of Rocket League featuring a dynamic UI, complex hitbox manipulation and 2 player support!",
        imageUrl: "/static/car-soccer.png",
        link: "https://github.com/VanshSharma14/Car-Soccer"
    },
    {
        title: "Stock Double-Bottom Tracker",
        description: "[Deprecated] Java application that utilizes Yahoo! Finance API to extract stock data and identifies double bottom trends.",
        imageUrl: "/static/double-bottom.jpg",
        link: ""
    },
    {
        title: "LegBot",
        description: "Discord bot that uses MongoDB, GPT3 and other plugins and commands for a high-utility discord experience.",
        imageUrl: "/static/legbot.png",
        link: ""
    },
    {
        title: "MealsOnWheels",
        description: "A web application that connects donors with local food banks to help reduce food waste and feed the hungry.",
        imageUrl: "/static/mow.png",
        link: ""
    }
]

const ProjectCarousel = () => {
    return (
        <div id="image-track img-body" data-mouse-down-at="0" data-prev-percentage="0">
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