import { Box } from '@chakra-ui/react'
import AboutMeFr from '../components/AboutMeFr'
import Experience from '../components/Experience'
import Introduction from '../components/Introduction'
import { NavBar } from '../components/NavBar'
import Projects from '../components/Projects'
import { useColorModeValue } from '../components/ui/color-mode'


function App() {
  
  const bgColor = useColorModeValue("blue.50", "gray.900")
  return (
    <>
 <Box  bg={bgColor}>
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
