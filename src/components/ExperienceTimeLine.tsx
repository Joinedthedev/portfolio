import { Image, Text, useBreakpointValue, Link } from '@chakra-ui/react'
import { experienceTimeLineProps } from '../data/ExperienceData'
import { TimelineConnector, TimelineContent, TimelineDescription, TimelineItem, TimelineTitle } from './ui/timeline'


const ExperienceTimeLine = ({ nameOfCompany, position, date, logo, description, location }: experienceTimeLineProps) => {
    const isDesktop = useBreakpointValue({ base: false, xs: false, sm: false, md: false, lg: true });
    return (
        <>

            {isDesktop && <Text pb={2} ml={2} fontWeight={"lighter"} fontSize={"xs"} whiteSpace="nowrap">{date}</Text>}


            <TimelineItem>
                {!isDesktop &&
                    <TimelineContent width="auto">
                        <TimelineTitle whiteSpace="nowrap">
                            {date}

                        </TimelineTitle>
                    </TimelineContent>}

                <TimelineConnector>
                    <Image
                        borderRadius={"full"}
                        objectFit={"cover"}
                        src={logo} />
                </TimelineConnector>
                <TimelineContent>

                    <TimelineTitle>{position}</TimelineTitle>

                    <TimelineDescription>

                        🏢 {nameOfCompany}

                    </TimelineDescription>

                    <TimelineDescription>📍 {location}</TimelineDescription>
                    <Text fontSize={["xs", "sm"]}>
                        {description}
                    </Text>

                </TimelineContent>
            </TimelineItem>


        </>
    )
}

export default ExperienceTimeLine