import React from 'react';
import Image from './Image';
import { Button, ButtonGroup } from '@chakra-ui/react'


const ProjectCard = (props) => {
    const { title, description, imageUrl, link } = props;

    return (
        <div className="project-card image">
            <Image src={imageUrl} alt=""/>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button colorScheme='white' variant='outline'>
                <a href={link}>Read more</a>
            </Button>

        </div>
    );
};

export default ProjectCard;