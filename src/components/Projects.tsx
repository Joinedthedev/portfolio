import { Box, Button, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { projectCardArray } from '../data/ProjectData'
import ProjectCards from './ProjectCards'
import { useColorModeValue } from './ui/color-mode'
import { useState } from 'react'


const Projects = () => {
    const colorVibrant = useColorModeValue("blue.500", "blue.300");
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);
    const buttonText = isCollapseOpen ? "View Less" : "View More";
    


    return (
        <Box display={"flex"} flexDirection={"column"} id='projects' justifyContent={"center"} alignItems={"center"} mt={"75px"} p={7}>
            <VStack mb={9}>
                <Heading fontSize={[ "2xl", "3xl"]}> Projects </Heading>
                <Heading fontWeight={"light"} fontSize={["lg", " xl"]}> Some cool stuff I've built.</Heading>
            </VStack>
            <Box >
                <SimpleGrid justifyContent={"center"} gap={10} columns={[1, 2, 3, 4]}  >
                    {projectCardArray.slice(0, 4).map((project, index) => (

                        <ProjectCards key={index}
                            isPublic={project.isPublic}
                            projectName={project.projectName}
                            projectDescription={project.projectDescription}
                            projectThumbnail={project.projectThumbnail}
                            codeLink={project.codeLink}
                            liveLink={project.liveLink}
                            isLive={project.isLive}
                            projectStack={project.projectStack}
                            projectCompleted={project.projectCompleted}
                        />
                    ))}
                </SimpleGrid>

                <Box mt={5}>
                    <CollapsibleRoot onExitComplete={()=> setIsCollapseOpen(false)} onOpenChange={() => setIsCollapseOpen(true)} display={"flex"} flexDirection={"column"} justifyContent={"center"} >
                        <CollapsibleContent>
                            <SimpleGrid justifyContent={"center"} gap={10} columns={[1, 2, 3, 4]}  >
                                {projectCardArray.slice(4).map((project, index) => (
                                    <ProjectCards key={index}
                                        isPublic={project.isPublic}
                                        projectName={project.projectName}
                                        projectDescription={project.projectDescription}
                                        projectThumbnail={project.projectThumbnail}
                                        codeLink={project.codeLink}
                                        liveLink={project.liveLink}
                                        isLive={project.isLive}
                                        projectStack={project.projectStack}
                                        projectCompleted={project.projectCompleted}
                                    />
                                ))}
                            </SimpleGrid>
                        </CollapsibleContent>
                        <CollapsibleTrigger  >
                            <Button m={3} bg={colorVibrant}>{buttonText}</Button>
                        </CollapsibleTrigger>
                    </CollapsibleRoot>
                </Box>
            </Box>
        </Box>
    )
}

export default Projects