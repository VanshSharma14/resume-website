const ProjectCard = (props) => {
    const { title, description, imageUrl, link } = props;

    return (
        <div className="project-card rounded-3xl">
            <div className="img-card" style={{ backgroundImage: `url(${imageUrl})` }}>
                {/* Overlay gradient on hover */}
                <div className="overlay"></div>
                <div className="content">
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <p>{description}</p>
                </div>
                {/* Button positioned at the bottom */}
                <a href={link} className="button">Show Me</a>
            </div>
        </div>
    );
};


export default ProjectCard;
