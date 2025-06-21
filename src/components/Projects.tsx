import { Box, Button, CollapsibleContent, Flex, CollapsibleRoot, CollapsibleTrigger, Heading, HStack, Link, SimpleGrid, useBreakpointValue, VStack, Input } from '@chakra-ui/react'
import { useState, ChangeEvent } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { projectCardArray } from '../data/ProjectData'
import ProjectCards from './ProjectCards'
import { useColorModeValue } from './ui/color-mode'
import { BsSearch } from 'react-icons/bs'
import { InputGroup } from './ui/input-group'

const Projects = () => {
    const colorVibrant = useColorModeValue("blue.500", "blue.300");
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [completionFilter, setCompletionFilter] = useState("all");
    const buttonText = isCollapseOpen ? "View Less" : "View More";
    const isTablet = useBreakpointValue({ base: false, xs: false, sm: false, md: false, lg: true, xl: false })
    const arrayNumber = isTablet ? 3 : 4

    const filteredProjects = projectCardArray.filter(project => {
        const matchesSearch = project.projectName.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCompletion = completionFilter === "all" 
            ? true 
            : completionFilter === "completed" 
                ? project.projectCompleted 
                : !project.projectCompleted;
        return matchesSearch && matchesCompletion;
    });

    const displayedProjects = filteredProjects.slice(0, arrayNumber);
    const remainingProjects = filteredProjects.slice(arrayNumber);

    const handleCompletionFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCompletionFilter(e.target.value);
    };

    return (
        <>
            <Box display={"flex"} flexDirection={"column"} id='projects' justifyContent={"center"} alignItems={"center"} mt={"75px"} p={7}>
                <VStack mb={9}>
                    <Heading fontSize={["2xl", "3xl"]}> Projects </Heading>
                    <Heading fontWeight={"light"} fontSize={["lg", " xl"]}> Some cool stuff I've built.</Heading>
                </VStack>

                <Box>
                    <Flex p={5} gap={4} direction={{ base: "column", md: "row" }} justify={"center"} align="center">
                        <InputGroup w={{ base: "100%", md: "400px" }} startElement={<BsSearch />}>
                            <Input
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                bg={useColorModeValue("white", "gray.700")}
                                borderColor={useColorModeValue("gray.200", "gray.600")}
                                _hover={{
                                    borderColor: colorVibrant,
                                }}
                                _focus={{
                                    borderColor: colorVibrant,
                                    boxShadow: `0 0 0 1px ${colorVibrant}`,
                                }}
                            />
                        </InputGroup>
                        <Box w={{ base: "100%", md: "200px" }}>
                            <select
                                value={completionFilter}
                                onChange={handleCompletionFilterChange}
                                style={{
                                    width: "100%",
                                    padding: "8px 12px",
                                    border: `1px solid ${useColorModeValue("gray.200", "gray.600")}`,
                                    borderRadius: "6px",
                                 
                                }}
                            >
                                <option value="all">All Projects</option>
                                <option value="completed">Completed</option>
                                <option value="in-progress">In Progress</option>
                            </select>
                        </Box>
                    </Flex>

                    <SimpleGrid justifyContent={"center"} gap={10} columns={[1, 2, 2, 3, 4]}>
                        {displayedProjects.map((project, index) => (
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

                    {remainingProjects.length > 0 && (
                        <Box mt={5}>
                            <CollapsibleRoot onExitComplete={() => setIsCollapseOpen(false)} onOpenChange={() => setIsCollapseOpen(true)} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                                <CollapsibleContent>
                                    <SimpleGrid justifyContent={"center"} gap={10} columns={[1, 2, 2, 3, 4]}>
                                        {remainingProjects.map((project, index) => (
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
                                            {buttonText} {isCollapseOpen ? <FaArrowUp /> : <FaArrowDown />}
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
                    )}
                </Box>
            </Box>
        </>
    )
}

export default Projects