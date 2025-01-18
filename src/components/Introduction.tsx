import { Heading, HStack } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect'

const Introduction = () => {
    return (

        <HStack mt={"100px"} p={5} alignItems={"center"} justifyContent={"center"}>
            <Heading textAlign={"center"} textWrap={"balance"} fontSize={[ "4xl", "6xl"]} my={6}>
                <Typewriter
                    options={{
                        loop: true,
                        cursor: "_",
                        delay: 80,
                        deleteSpeed: 20
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Hello, I am <Span style="color:rgb(10, 60, 224);">Salim<Span/><Span style="color: rgb(0,0,0);">!<Span/>')
                            .pauseFor(1500)
                            .deleteChars(7)
                            .typeString('a <Span style="color: rgb(118, 118, 118);">Software Engineer<Span/>💻<Span style="color: rgb(0,0,0);">.<Span/>')
                            .pauseFor(1500)
                            .deleteChars(26)
                            .typeString(' studied<Span style="color:rgb(175, 131, 131);"> Computer Science <Span/>👨🏿‍🎓')
                            .pauseFor(1500)
                            .deleteChars(33)
                            .typeString(' am a <Span style="color:rgb(21, 178, 221);">Content Creator<Span/>🎥<Span style="color: rgb(0,0,0);">.<Span/>')
                            .pauseFor(1500)
                            .deleteChars(18)
                            .typeString('<Span style="color:rgb(221, 101, 21);">Writer<Span/>📝<Span style="color: rgb(0,0,0);">.<Span/>')
                            .pauseFor(1500)
                            .deleteAll()
                            .typeString('Thanks for visiting my <Span style=" color: rgb(0, 255, 238);"> portfolio<Span/>🌎<Span style="color: rgb(0,0,0);">.<Span/>')
                            .pauseFor(1500)
                            .start();
                    }}
                ></Typewriter>
            </Heading>
        </HStack>

    )
}

export default Introduction