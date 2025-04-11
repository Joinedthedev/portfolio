"use client"
import { useEffect, useState } from 'react';
import { IconButton, Box } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useColorModeValue } from './ui/color-mode';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonColor = useColorModeValue("blue.500", "blue.300");

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        zIndex: 1000,
                    }}
                >
                    <IconButton
                        aria-label="Back to top"
                        onClick={scrollToTop}
                        size="lg"
                        colorScheme="blue"
                        bg={buttonColor}
                        borderRadius="full"
                        boxShadow="lg"
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'xl',
                        }}
                        _active={{
                            transform: 'translateY(0)',
                            boxShadow: 'md',
                        }}
                    >
                        <Box as={FaArrowUp} />
                    </IconButton>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BackToTop; 