import { Box, VStack, Button, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger, Heading, HStack, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import me from '../assets/Professional.jpg'
import { skillsArray } from '../data/SkillsData'
import Skills from './Skills'
import { useColorModeValue } from './ui/color-mode'
const AboutMeFr = () => {

  const isMobile = useBreakpointValue({ base: true, xs: true, sm: true, md: false, lg: false });
  const colorVibrant = useColorModeValue("blue.500", "blue.300");
  const bgColor = useColorModeValue("blue.50", "gray.900")
  return (
    <HStack p={7} mt={"100px"} wrap={isMobile ? "wrap" : "nowrap"} justifyContent={isMobile ? "space-between" : ""} alignItems={"center"}>
      <Box maxW={isMobile ? "100%" : "50%"} >
        <Heading fontSize={["xl", "1xl", "2xl", "3xl"]}>About Me</Heading>

        <Text textAlign={isMobile ? 'justify' : "left"} pt={2} fontSize={["sm", "md", "lg", "lg"]}>
          I love to build and I love to solve problems. Lucky for me, it just so happens that to solve problems,
          you need to build solutions. So I build things. I'm a Software Engineer with a knack for creative solutions, a Computer Science graduate, and a writer(on my free time).
          I'm always eager to learn new tech, solve new problems, then rinse and repeat on my own or with a team.
        </Text>

        <HStack mt={2} align={"center"} gap={5}>

          <CollapsibleRoot>
            <CollapsibleTrigger>
              <Button bg={colorVibrant} size={["sm", "md", "md"]}>Some Cool Stuff I Learned 🔧</Button>
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

      {isMobile ? <VStack align={"center"} justify="center" mt={5} mx="auto" display={"block"}>
        <Image
          borderRadius="full"
          fit="cover"
          boxSize={"200px"}
          src={me} />

        <Button bg ={colorVibrant} mt={2} ml={10} size={"sm"}> Contact Me</Button>
      </VStack>
        :
        <VStack ml={"auto"}>
          <Image
            borderRadius="full"
            fit="cover"
            boxSize={"300px"}
            src={me} />

          <Button bg ={colorVibrant}> Contact Me</Button>
        </VStack>
      }
    </HStack>
  )
}

export default AboutMeFr