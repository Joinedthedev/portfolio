import { Heading, Button, VStack, Box, SimpleGrid, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from '@chakra-ui/react'
import React from 'react'
import ProjectCards from './ProjectCards'
import { projectCardArray } from '../data/ProjectData'
import { useColorModeValue } from './ui/color-mode'


const Projects = () => {
    const colorVibrant = useColorModeValue("blue.500", "blue.300");
    return (
        <Box justifyContent={"center"} alignItems={"center"} mt={"100px"} p={7}>
            <VStack mb={9}>
                <Heading fontSize={["xl", "1xl", "2xl", "3xl"]}> Projects </Heading>
                <Heading fontSize={["md", " lg"]}> Some cool stuff I've built.</Heading>
            </VStack>
            <Box >
                <SimpleGrid justifyContent={"center"} gap={10} columns={[1, 2, 3, 4]}  >
                    {projectCardArray.slice(0, 4).map((project, index) => (
                        <ProjectCards key={index}
                            projectName={project.projectName}
                            projectDescription={project.projectDescription}
                            projectThumbnail={project.projectThumbnail}
                            projectLink={project.projectLink}
                            projectStack={project.projectStack}
                            projectCompleted={project.projectCompleted}
                        />
                    ))}
                </SimpleGrid>

                <Box  mt={5}>
                    <CollapsibleRoot display={"flex"} flexDirection={"column"} justifyContent={"center"} >
                        <CollapsibleContent>
                            <SimpleGrid justifyContent={"center"} gap={10} columns={[1, 2, 3, 4]}  >
                                {projectCardArray.slice(4).map((project, index) => (
                                    <ProjectCards key={index}
                                        projectName={project.projectName}
                                        projectDescription={project.projectDescription}
                                        projectThumbnail={project.projectThumbnail}
                                        projectLink={project.projectLink}
                                        projectStack={project.projectStack}
                                        projectCompleted={project.projectCompleted}
                                    />
                                ))}
                            </SimpleGrid>
                        </CollapsibleContent>
                        <CollapsibleTrigger  >
                            <Button m={3} bg={colorVibrant}>View More</Button>
                        </CollapsibleTrigger>
                    </CollapsibleRoot>
                </Box>
            </Box>
        </Box>
    )
}

export default Projects