import { Button, Input, Text, Theme,  } from "@chakra-ui/react"
useColorModeValue
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "./ui/popover.tsx"
import { useColorModeValue } from "./ui/color-mode.tsx";

export const Demo = () => {
   const colorVibrant = useColorModeValue("blue.500", "blue.300");
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <Button bg ={colorVibrant} size="sm" variant="outline">
          Click me
        </Button>
      </PopoverTrigger>
      <PopoverContent asChild>
        <Theme hasBackground={false} appearance="dark" colorPalette="teal">
          <PopoverArrow />
          <PopoverBody spaceY="4">
            <PopoverTitle fontWeight="medium">Naruto Form</PopoverTitle>
            <Text>
              Naruto is a Japanese manga series written and illustrated by
              Masashi Kishimoto.
            </Text>
            <Input placeholder="Search" />
            <Button bg ={colorVibrant}>Click me</Button>
          </PopoverBody>
        </Theme>
      </PopoverContent>
    </PopoverRoot>
  )
}
