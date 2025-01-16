import { useState } from 'react'
import { Demo } from './components/Demo'
import { useColorModeValue } from './components/ui/color-mode'
import { Box } from '@chakra-ui/react'
import { NavBar } from './components/NavBar'
import Introduction from './components/Introduction'
import Experience from './components/Experience'
import AboutMeFr from './components/AboutMeFr'
import Projects from './components/Projects'


function App() {
  
  const bgColor = useColorModeValue("blue.50", "gray.900")
  return (
    <>
 <Box bg={bgColor}>
   <NavBar/>
   <Introduction/>
   <AboutMeFr/>
   <Experience/>
   <Projects/>
 </Box>
      
    </>
  )
}

export default App
