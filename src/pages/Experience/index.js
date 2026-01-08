import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import NavBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { workExperience } from "../../constants/experience";
import MobileExperienceCard from './MobileExperienceCard';
import DesktopTimeline from './DesktopTimeline';
import DesktopExperienceCard from './DesktopExperienceCard';

export default function Experience() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    if (isMobile) {
        return (
            <Box sx={{ backgroundColor: '#f8f9fa', minHeight: '100vh', pb: 10 }}>
                <NavBar />
                <Container maxWidth="sm" sx={{ py: 1 }}>
                    <Box sx={{ position: 'relative' }}>
                        {workExperience.map((experience, index) => (
                            <MobileExperienceCard
                                key={index}
                                experience={experience}
                                index={index}
                                isExpanded={expandedIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}
                    </Box>
                </Container>
                <Footer />
            </Box>
        );
    }

    return (
        <Box sx={{ backgroundColor: '#f8f9fa', minHeight: '100vh', pb: 10 }}>
            <NavBar />
            <Container maxWidth="xl" sx={{ py: 1 }}>
                <Box sx={{ position: 'relative', py: 1 }}>
                    <DesktopTimeline
                        workExperience={workExperience}
                        expandedIndex={expandedIndex}
                        onToggle={handleToggle}
                    />

                    <Box sx={{ width: '100%', mt: 2 }}>
                        {workExperience.map((experience, index) => (
                            <DesktopExperienceCard
                                key={index}
                                experience={experience}
                                index={index}
                                isExpanded={expandedIndex === index}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
}

