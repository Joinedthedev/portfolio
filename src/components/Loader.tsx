import { Spinner, Text, VStack } from "@chakra-ui/react"

type LoaderProps ={
    bgColor: string
}
const Loader = ({bgColor}:LoaderProps) => {
    return (

        <VStack bg={bgColor} height={"100vh"} width={"100vw"} align={"center"} justify={"center"} colorPalette="blue">
            <Spinner size={["xl"]} color="colorPalette.600" />
            <Text fontSize={[ "xl"]} color="colorPalette.600">Loading...</Text>
        </VStack>
    )



}

export default Loader