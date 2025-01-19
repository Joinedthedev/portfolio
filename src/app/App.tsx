import { Box } from '@chakra-ui/react'
import AboutMeFr from '../components/AboutMeFr'
import Experience from '../components/Experience'
import Introduction from '../components/Introduction'
import { NavBar } from '../components/NavBar'
import Projects from '../components/Projects'
import { useColorModeValue } from '../components/ui/color-mode'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import Loader from '../components/Loader'
function App() {

  const loadingTimer = useRef<number | null>(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadingTimer.current = window.setTimeout(() => {
      setIsLoading(false)
      console.log("timer has been removed")
    }, 1000);

    return () => {
      if (loadingTimer.current !== null) {
        clearTimeout(loadingTimer.current)
        console.log("timer has been cleared")
      }
    };
  }, [])

  const bgColor = useColorModeValue("blue.50", "gray.900")
  return (
    <>
      {isLoading ?
        
          <Loader bgColor={bgColor} />
       
        :
        <Box bg={bgColor}>
          <NavBar />
          <Introduction />
          <AboutMeFr />
          <Experience />
          <Projects />
        </Box>
      }
    </>
  )
}

export default App
