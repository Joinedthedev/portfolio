import { Box, Button, Card, HStack, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

import { ProjectCardProps } from '../data/ProjectData'
import { useColorModeValue } from './ui/color-mode'
import { SiGithub } from 'react-icons/si'
import { PiGlobeThin } from 'react-icons/pi'

const ProjectCards = ({ projectName, codeLink, liveLink, isLive, projectCompleted, projectDescription, projectThumbnail, isPublic, projectStack }: ProjectCardProps) => {
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

                <Box justifyContent={"flex-start"}

                >
                    <Card.Body >
                        <Card.Title fontSize={[ "md", "md",]}>{projectName}</Card.Title>
                        <HStack color={iconColor} mt={2} >
                            {projectStack.map((Icon, index) => (
                                <Icon color={iconColor} key={index} >
                                    {React.createElement(Icon)}
                                </Icon>
                            ))}
                        </HStack >
                        <Card.Description fontSize={[ "sm", "md", "md",]} mt={2}>{projectDescription}</Card.Description>


                        <HStack>
                            <Link href={codeLink} mt={3}>
                                <Button disabled={!isPublic}  size={["md",]} >
                                    Code <SiGithub />
                                </Button>
                            </Link>
                            <Link href={liveLink} mt={3}>
                                <Button disabled={!isLive} size={["md",]} bg={colorVibrant}> Website <PiGlobeThin />
                                </Button>
                            </Link>
                        </HStack>
                    </Card.Body>

                    <Card.Footer > {projectCompleted ? <Text fontWeight={"light"} fontSize={["md",]}>Status: Completed</Text> : <Text fontWeight={"light"} fontSize={["md",]}>Status: Work in Progress</Text>}</Card.Footer>

                </Box>
            </Card.Root>

        </>
    )
}

export default ProjectCards