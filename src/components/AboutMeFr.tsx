"use client"
import { Box, Button, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger, Heading, HStack, Link, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import { skillsArray } from '../data/SkillsData'
import Skills from './Skills'
import { useColorModeValue } from './ui/color-mode'
import { BiDownload } from 'react-icons/bi'
import { BsEyeFill, BsFillEyeSlashFill, BsFolder } from 'react-icons/bs'
import NextImage from 'next/image'
import { Image } from '@chakra-ui/react'

const AboutMeFr = () => {

  const isMobile = useBreakpointValue({ base: true, xs: true, sm: true, md: false, lg: false });
  const colorVibrant = useColorModeValue("blue.500", "blue.300");

  return (
    <HStack id='about-me' p={7} mt={"100px"} wrap={isMobile ? "wrap" : "nowrap"} justifyContent={isMobile ? "space-between" : ""} alignItems={"center"}>
      <Box maxW={isMobile ? "100%" : "50%"} >
        <VStack align={"flex-start"} justifySelf={"flex-start"} mb={1}>
          <Heading fontSize={[ "2xl", "3xl"]}>About Me</Heading>
          <Heading fontWeight={"light"} fontSize={["lg", " xl"]}> Learn a little about me.</Heading>
        </VStack>

        <Text textAlign={isMobile ? 'justify' : "left"} pt={2} fontSize={[ "lg"]}>
          I love to build and I love to solve problems. Lucky for me, it just so happens that to solve problems,
          you need to build solutions. So I build things. I'm a Software Engineer with a knack for creative solutions, a Computer Science Graduate, and a writer on my free time.
          I'm always eager to learn new tech, solve new problems, then rinse and repeat on my own or with a team. I'm currently working on a blog (coming very very soon) where I can properly write but for now,
          check out what I've been up to below!
        </Text>

        <HStack mt={2} align={"center"} gap={5}>

          <CollapsibleRoot >
            <CollapsibleTrigger asChild>
              <Button mt={2} bg={colorVibrant} size={["lg"]}>Some Cool Stuff I Learned 🔧</Button>
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

          <Image asChild borderRadius="full" boxSize="250px" overflow="hidden">
            <NextImage
              src="/Professional.jpg"
              alt="Portrait of Salim Ahmed Babaji"
              width={250}
              height={250}
              style={{ objectFit: "cover" }}
            />
          </Image>

          <Link href="mailto:salimahmedbabaji@gmail.com" variant={"plain"}><Button bg={colorVibrant}  size={"lg"}> Contact Me ✉️</Button></Link>
          <a href="https://docs.google.com/document/d/1016tjg2SWwZ09ctZXAjUTFCMvL3q4mGxwRj2RT3Fvec/edit?usp=sharing" ><Button size={["lg"]}> View Resume <BsFolder/> </Button></a>
        </VStack>
        :
        <VStack ml={"auto"}>
          <Image asChild borderRadius="full" boxSize="300px" overflow="hidden">
            <NextImage
              src="/Professional.jpg"
              alt="Portrait of Salim Ahmed Babaji"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </Image>

          <HStack>
            <Link variant={"plain"} href='mailto:salimahmedbabaji@gmail.com'><Button bg={colorVibrant}> Contact Me ✉️</Button></Link>
            <a href="https://docs.google.com/document/d/1016tjg2SWwZ09ctZXAjUTFCMvL3q4mGxwRj2RT3Fvec/edit?usp=sharing" download><Button>View Resume<BsFolder/> </Button></a>
          </HStack>
        </VStack>
      }
    </HStack>
  )
}

export default AboutMeFr
