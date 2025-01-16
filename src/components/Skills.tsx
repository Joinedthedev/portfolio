import React, { useState } from 'react'
import { Button, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger, HStack, Icon, PopoverOpenChangeDetails } from '@chakra-ui/react'
import { SkillProps, } from '../data/SkillsData'
import { Tooltip } from './ui/tooltip'
import { PopoverArrow, PopoverRoot, PopoverBody, PopoverTrigger, PopoverContent } from './ui/popover'
import { useColorModeValue } from './ui/color-mode'
const Skills = ({ name, logo, description }: SkillProps) => {
    const [open, setOpen] = useState(false)
    const handleOpenChange = (e: PopoverOpenChangeDetails) => {
        setOpen(e.open)
    }
    const iconColor = useColorModeValue("blue.800", "blue.200")
    return (

        
            <PopoverRoot open={open} onOpenChange={handleOpenChange}>
                <PopoverTrigger >
                    <Tooltip content={name+"-> Click to learn more"}>
                        <Icon color={iconColor} size={"2xl"} bg={"none"}>
                            {React.createElement(logo)}
                        </Icon>
                    </Tooltip>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                        {description}
                    </PopoverBody>
                </PopoverContent>
            </PopoverRoot>
        



    )
}

export default Skills