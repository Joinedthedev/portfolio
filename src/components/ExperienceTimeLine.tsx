import { Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { experienceTimeLineProps } from '../data/ExperienceData';
import { TimelineConnector, TimelineContent, TimelineDescription, TimelineItem, TimelineTitle } from './ui/timeline';
import NextImage from "next/image"

const ExperienceTimeLine = ({ nameOfCompany, position, date, logo, description, location }: experienceTimeLineProps) => {
    const isDesktop = useBreakpointValue({ base: false, xs: false, sm: false, md: false, lg: true });
    return (
        <>

            {isDesktop && <Text pb={2} ml={2} fontWeight={"lighter"} fontSize={"xs"} whiteSpace="nowrap">{date}</Text>}


            <TimelineItem>
                {!isDesktop &&
                    <TimelineContent width="200px">
                        <TimelineTitle fontSize={"11px"} whiteSpace="nowrap">
                            {date}

                        </TimelineTitle>
                    </TimelineContent>}

                <TimelineConnector>
                    <Image asChild borderRadius={"full"}  overflow="hidden" flexShrink={0}>
                        <NextImage
                            alt={`${nameOfCompany} logo`}
                            src={logo}
                            width={32}
                            height={32}
                            sizes="32px"
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                    </Image>
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
