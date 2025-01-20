import { Box, Button, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger, Heading, HStack, Link, SimpleGrid, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { projectCardArray } from '../data/ProjectData'
import ProjectCards from './ProjectCards'
import { useColorModeValue } from './ui/color-mode'


const Projects = () => {
    const colorVibrant = useColorModeValue("blue.500", "blue.300");
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);
    const buttonText = isCollapseOpen ? "View Less" : "View More";



    return (
        <Box display={"flex"} flexDirection={"column"} id='projects' justifyContent={"center"} alignItems={"center"} mt={"75px"} p={7}>
            <VStack mb={9}>
                <Heading fontSize={["2xl", "3xl"]}> Projects </Heading>
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
                    <CollapsibleRoot onExitComplete={() => setIsCollapseOpen(false)} onOpenChange={() => setIsCollapseOpen(true)} display={"flex"} flexDirection={"column"} justifyContent={"center"} >
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
                        <HStack mt={isCollapseOpen ? 5 : 0} justify={"center"}>
                            <CollapsibleTrigger>

                                <Button bg={colorVibrant}>
                                    {buttonText} {isCollapseOpen ? <FaArrowUp /> : <FaArrowDown/>}
                                </Button>
                            </CollapsibleTrigger>
                            <Link variant={"plain"} href='mailto:salimahmedbabaji@gmail.com'>
                                <Button bg={colorVibrant}>
                                    Contact Me ✉️
                                </Button>
                            </Link>
                        </HStack>
                    </CollapsibleRoot>
                </Box>
            </Box>
        </Box>
    )
}

export default Projects