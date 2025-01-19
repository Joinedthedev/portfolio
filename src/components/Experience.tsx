import { Box, Heading, SimpleGrid, useBreakpointValue, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { experiences } from '../data/ExperienceData';
import ExperienceTimeLine from './ExperienceTimeLine';
import { TimelineRoot } from './ui/timeline';


const Experience = () => {

    const [experienceArray] = useState(experiences);

    const isDesktop = useBreakpointValue({ base: false, xs: false, sm: false, md: false, lg: true });
    return (

        <Box id="exp" mt={isDesktop? "100px": "75px"} p={7}>
            <VStack p={3} gap={2}>
                <Heading fontSize={[ "2xl", "3xl"]}> Experience </Heading>
                <Heading fontWeight="light" fontSize={["md", " lg"]}> Here's what my journey looks like so far.</Heading>
            </VStack>

            {isDesktop ? <SimpleGrid gap={3} minChildWidth={"sm"}>

                {experienceArray.map((experience, index) => {
                    const isEven = experienceArray.length % 2 === 0;
                    const isLast = index === experienceArray.length - 1;
                    const addEmpty = isLast && isEven;
                    return (
                        <React.Fragment key={index}
                        >
                            {addEmpty ? <div> </div> : null}
                            <TimelineRoot maxW={"500px"} size={"xl"}>
                                <ExperienceTimeLine
                                    nameOfCompany={experience.nameOfCompany}
                                    position={experience.position}
                                    description={experience.description}
                                    location={experience.location}
                                    logo={experience.logo}
                                    date={experience.date}
                                />
                            </TimelineRoot>
                        </React.Fragment>
                    )
                })}

            </SimpleGrid> :
                <TimelineRoot size={"sm"}>

                    {experienceArray.map((experience, index) => {
                        return (

                            <ExperienceTimeLine
                                key={index}
                                nameOfCompany={experience.nameOfCompany}
                                position={experience.position}
                                description={experience.description}
                                location={experience.location}
                                logo={experience.logo}
                                date={experience.date}
                            />
                        )
                    })}

                </TimelineRoot>}
        </Box>
    );
};

export default Experience;