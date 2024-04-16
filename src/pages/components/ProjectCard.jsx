import React from 'react';
import Image from 'next/image';
import { Button, ButtonGroup } from '@chakra-ui/react'


const ProjectCard = (props) => {
    const { title, description, imageUrl, link } = props;

    return (
        <div className="project-card image">
            <Image src={imageUrl} width={400} height={400} alt=""/>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button colorScheme='white' variant='outline'>
                <a href={link}>Read more</a>
            </Button>

        </div>
    );
};

export default ProjectCard;