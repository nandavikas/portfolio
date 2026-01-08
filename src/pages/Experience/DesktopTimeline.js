import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CompanyLogo from './CompanyLogo';
import ExpandButton from './ExpandButton';

export default function DesktopTimeline({ workExperience, expandedIndex, onToggle }) {
    return (
        <>
            {/* Horizontal Line */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 50,
                    left: 0,
                    right: 0,
                    height: 1.5,
                    backgroundColor: '#26a69a',
                    opacity: 0.3,
                    zIndex: 0
                }}
            />

            {/* Timeline Row */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    position: 'relative',
                    zIndex: 1,
                    mb: 4
                }}
            >
                {workExperience.map((experience, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            px: 1
                        }}
                    >
                        <Box onClick={() => onToggle(index)}>
                            <CompanyLogo 
                                logo={experience.logo} 
                                logoAlt={experience.logoAlt} 
                                size={65} 
                                borderWidth="3px"
                                isMobile={false}
                            />
                        </Box>

                        <ExpandButton 
                            isExpanded={expandedIndex === index} 
                            onClick={() => onToggle(index)} 
                            isMobile={false}
                        />

                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#2c3e50',
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    mb: 0.5
                                }}
                            >
                                {experience.companyName}
                            </Typography>
                            <Chip
                                label={experience.dateRange}
                                sx={{
                                    backgroundColor: '#f0f4f8',
                                    color: '#34495e',
                                    fontWeight: 500,
                                    fontSize: '0.75rem',
                                    height: 26
                                }}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    );
}

