import React from 'react';
import Image from 'next/image';
import { Button } from '@chakra-ui/react';

const ProjectCard = (props) => {
    const { title, description, imageUrl, link } = props;

    return (
        <div className="relative group w-64 h-96"> {/* Adjusted for a fixed size */}
            <div className="w-full h-full overflow-hidden"> {/* Ensure the image is contained within bounds */}
                <Image src={imageUrl} className='image' alt={title} layout='fill' objectFit='cover' draggable="false" />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 ease-in-out flex flex-col justify-end p-4">
                <h2 className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">{title}</h2>
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">{description}</p>
                <Button colorScheme='white' variant='outline' className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out mt-2">
                    <a href={link}>Read more</a>
                </Button>
            </div>
        </div>
    );
};

export default ProjectCard;
