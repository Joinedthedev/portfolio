"use client"
import { Box, Button, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger, Heading, HStack, Image, Link, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import { skillsArray } from '../data/SkillsData'
import Skills from './Skills'
import { useColorModeValue } from './ui/color-mode'
const AboutMeFr = () => {

  const isMobile = useBreakpointValue({ base: true, xs: true, sm: true, md: false, lg: false });
  const colorVibrant = useColorModeValue("blue.500", "blue.300");

  return (
    <HStack id='about-me' p={7} mt={"100px"} wrap={isMobile ? "wrap" : "nowrap"} justifyContent={isMobile ? "space-between" : ""} alignItems={"center"}>
      <Box maxW={isMobile ? "100%" : "50%"} >
        <Heading fontSize={[ "2xl", "3xl"]}>About Me</Heading>

        <Text textAlign={isMobile ? 'justify' : "left"} pt={2} fontSize={["lg", "xl"]}>
          I love to build and I love to solve problems. Lucky for me, it just so happens that to solve problems,
          you need to build solutions. So I build things. I'm a Software Engineer with a knack for creative solutions, a Computer Science graduate, and a writer(on my free time).
          I'm always eager to learn new tech, solve new problems, then rinse and repeat on my own or with a team.
        </Text>

        <HStack mt={2} align={"center"} gap={5}>

          <CollapsibleRoot >
            <CollapsibleTrigger asChild>
              <Button bg={colorVibrant} size={["lg"]}>Some Cool Stuff I Learned 🔧</Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <HStack wrap={"wrap"} mt={4} gap={10} alignItems={"center"}>
                {skillsArray.map((skills, index) => (
                  <Skills key={index}
                    name={skills.name}
                    logo={skills.logo}
                    description={skills.description} />
                ))}
              </HStack>
            </CollapsibleContent>
          </CollapsibleRoot>

        </HStack>

      </Box>

      {isMobile ?
        <VStack alignItems={"center"}  mt={"100px"} mx="auto" >
          <Image
            borderRadius="full"
            fit="cover"
            boxSize={"250px"}
            src="/Professional.jpg" />

          <Link href="mailto:salimahmedbabaji@gmail.com" variant={"plain"}><Button bg={colorVibrant}  size={"lg"}> Contact Me</Button></Link>
        </VStack>
        :
        <VStack ml={"auto"}>
          <Image
            borderRadius="full"
            fit="cover"
            boxSize={"300px"}
            src="/Professional.jpg" />

          <Link variant={"plain"} href='mailto:salimahmedbabaji@gmail.com'><Button bg={colorVibrant}> Contact Me</Button></Link>
        </VStack>
      }
    </HStack>
  )
}

export default AboutMeFr