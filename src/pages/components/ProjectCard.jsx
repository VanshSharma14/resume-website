import ColorThief from 'colorthief';

const colorCache = {};

const ProjectCard = (props) => {
    const { title, description, imageUrl, link } = props;

    const handleMouseEnter = () => {
        // Check cache first
        if (colorCache[imageUrl]) {
            applyGradient(colorCache[imageUrl]);
            return;
        }

        const img = new Image();
        img.crossOrigin = "Anonymous";  // Needed if the images are served from another domain
        img.src = imageUrl;
        img.onload = () => {
            const colorThief = new ColorThief();
            const color = colorThief.getColor(img);
            colorCache[imageUrl] = color; // Cache the color
            applyGradient(color);
        };
    };

    const applyGradient = (color) => {
        const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        const gradient = `linear-gradient(to top, ${rgbColor}, ${adjustColor(color, +130)})`;
        document.getElementById('projects').style.backgroundImage = gradient;
    };

    // Function to lighten or darken a color
    function adjustColor([r, g, b], amount) {
        const adjust = c => Math.max(Math.min(255, c + amount), 0);
        return `rgb(${adjust(r)}, ${adjust(g)}, ${adjust(b)})`;
    }

    

    return (
        <div className="project-card rounded-3xl flex-shrink-0 w-[288px] h-[420px] md:w-80 md:h-[500px]" onMouseEnter={handleMouseEnter} style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="img-card" style={{ backgroundImage: `url(${imageUrl})` }}>
                    {/* Overlay gradient on hover */}
                    <div className="overlay"></div>
                    <div className="content">
                        <h2 className="lg:text-4xl md:text-xl text-lg font-bold">{title}</h2>
                        <p className='md:text-lg text-xs'>{description}</p>
                    </div>
                    {/* Button positioned at the bottom */}
                    <a href={link} className="button sm:hidden px-2 py-2 text-xs">Open</a>
                    <a href={link} className="button hidden md:block text-lg">Show Me</a>
                </div>
        </div>
    );
};


export default ProjectCard;
