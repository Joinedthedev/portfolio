import React from 'react'
import { Box, Card, Image, HStack, Button, Link, Text } from '@chakra-ui/react'

import { ProjectCardProps } from '../data/ProjectData'
import { useColorModeValue } from './ui/color-mode'

const ProjectCards = ({ projectName, projectCompleted, projectDescription, projectThumbnail, projectLink, projectStack }: ProjectCardProps) => {
    const colorVibrant = useColorModeValue("blue.500", "blue.300");
    const iconColor = useColorModeValue("blue.800", "blue.200")
    return (
        <>
            <Card.Root _hover={{
                    opacity: "0.8",
                    transition: "all 0.3s ease",
                    transform: "scale(1.01)",
                    
                }} maxW={"xs"} overflow="hidden">
                <Image
                  
                    alt={projectName}
                    src={projectThumbnail}
                    maxWidth={"400px"}
                />

                <Box  justifyContent={"flex-start"}
                
                >
                    <Card.Body >
                        <Card.Title fontSize={["xs", "sm", "md", "md", ]}>{projectName}</Card.Title>
                        <HStack color={iconColor} mt={2} >
                            {projectStack.map((Icon, index) => (
                                <Icon  color={iconColor} key={index} >
                                    {React.createElement(Icon)}
                                </Icon>
                            ))}
                        </HStack >
                        <Card.Description fontSize={["xs", "sm", "md", "md", ]} mt={2}>{projectDescription}</Card.Description>


                        <Link href={projectLink} mt={3}><Button size={["xs", "sm", "md", "md", ]} bg ={colorVibrant}> Check it out</Button></Link>
                    </Card.Body>

                    <Card.Footer > {projectCompleted ? <Text fontSize={["xs", "sm", "md", "md", ]}>Status: Completed</Text> : <Text>Status: Work in Progress</Text>}</Card.Footer>

                </Box>
            </Card.Root>

        </>
    )
}

export default ProjectCards