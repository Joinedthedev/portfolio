import { Flex, Icon, IconButton, Link, useBreakpointValue } from '@chakra-ui/react';
import { GrGithub, GrLinkedinOption, GrMail } from "react-icons/gr";
import { RxHamburgerMenu } from 'react-icons/rx';
import { ColorModeButton, useColorModeValue } from './ui/color-mode';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger, } from "./ui/menu";

export const NavBar = () => {
    const isMobile = useBreakpointValue({ base: true, xs: true, sm: true, md: false, lg: false });
    const iconColor = useColorModeValue("blue.800", "blue.200")

    return (
        <>

            <Flex p={3} w={"100%"}  >

                {isMobile ?
                    <MenuRoot>
                        <MenuTrigger>
                            <IconButton color={iconColor} backgroundColor={"none"}>
                                <RxHamburgerMenu />
                            </IconButton>
                        </MenuTrigger>
                        <MenuContent>

                            <MenuItem value='About Me'>
                                <Link variant={'plain'} href=''> About Me</Link>
                            </MenuItem>
                            <MenuItem value='Experience'>
                                <Link variant={'plain'} href=''> Experience</Link>
                            </MenuItem>
                            <MenuItem value='Projects'>
                                <Link variant={'plain'} href=''> Projects</Link>
                            </MenuItem>
                            <MenuItem value='Extras'>
                                <Link variant={'plain'} href=''> Extras</Link>
                            </MenuItem>
                        </MenuContent>
                    </MenuRoot> : (<Flex gap={4} direction={"row"}>
                        <Link href=''> About Me</Link>
                        <Link href=''> Experience</Link>
                        <Link href=''> Projects</Link>
                        <Link href=''> Extras</Link>
                    </Flex>
                    )}
                <Flex ml={"auto"} gap={2}>
                    <Link href='https://www.linkedin.com/in/salim-babaji'>
                        <Icon color={iconColor} size={'lg'} bg={"none"}>
                            <GrLinkedinOption />
                        </Icon>
                    </Link>

                    <Link href='https://github.com/Joinedthedev'>
                        <Icon color={iconColor} size={'lg'} bg={"none"}>
                            <GrGithub />
                        </Icon>
                    </Link>

                    <Link href="mailto:salimahmedbabaji@gmail.com">
                        <Icon color={iconColor} size={'lg'} bg={"none"}>
                            <GrMail />
                        </Icon>
                    </Link>

                    <ColorModeButton color={iconColor} />
                </Flex>
            </Flex>


        </>
    )
}
