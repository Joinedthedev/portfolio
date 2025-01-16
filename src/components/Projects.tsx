import { Heading, VStack, Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProjectCards from './ProjectCards'
import { projectCardArray } from '../data/ProjectData'

const Projects = () => {
    return (
        <Box justifyContent={"center"} mt={"100px"} p={7}>
            <VStack mb={9}>
                <Heading fontSize={["xl", "1xl", "2xl", "3xl"]}> Projects </Heading>
                <Heading fontSize={["md", " lg"]}> Some cool stuff I've built.</Heading>
            </VStack>
            <Box >
                <SimpleGrid justifyContent={"center"} gap={10} columns={[1,2,3,4]}  >
                    {projectCardArray.map((project, index) => (
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
            </Box>
        </Box>
    )
}

export default Projects