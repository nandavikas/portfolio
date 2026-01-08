import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CompanyLogo from './CompanyLogo';
import ExpandButton from './ExpandButton';
import SkillItem from './SkillItem';

export default function MobileExperienceCard({ experience, index, isExpanded, onToggle }) {
    const [activeTab, setActiveTab] = useState(0); // 0 = responsibilities, 1 = skills
    const prevExpandedRef = useRef(isExpanded);

    // Reset to responsibilities when card is expanded (transition from collapsed to expanded)
    useEffect(() => {
        if (!prevExpandedRef.current && isExpanded) {
            setActiveTab(0);
        }
        prevExpandedRef.current = isExpanded;
    }, [isExpanded]);
    return (
        <Box sx={{ mb: 2, position: 'relative' }}>
            <Card
                sx={{
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e8eaed',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    minHeight: '90px',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                        transform: 'translateY(-2px)'
                    }
                }}
            >
                <CardContent sx={{ p: 2.5, py: 3, '&:last-child': { pb: 3 } }}>
                    <Box
                        onClick={onToggle}
                        sx={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 1.5,
                            mb: isExpanded ? 1 : 0,
                            justifyContent: 'space-between',
                            minHeight: '60px'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1, minWidth: 0 }}>
                            <CompanyLogo 
                                logo={experience.logo} 
                                logoAlt={experience.logoAlt} 
                                size={56} 
                                borderWidth="1px"
                                isMobile={true}
                            />
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography
                                    sx={{
                                        color: '#2c3e50',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        mb: 0.25,
                                        lineHeight: 1.2
                                    }}
                                >
                                    {experience.companyName}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#26a69a',
                                        fontWeight: 600,
                                        fontSize: '0.75rem',
                                        lineHeight: 1.2
                                    }}
                                >
                                    {experience.jobTitle}
                                </Typography>
                            </Box>
                        </Box>
                        <Chip
                            label={experience.dateRange}
                            sx={{
                                backgroundColor: '#f0f4f8',
                                color: '#34495e',
                                fontWeight: 500,
                                fontSize: '0.65rem',
                                height: 18,
                                flexShrink: 0,
                                mt: 0.25,
                                '& .MuiChip-label': {
                                    padding: '0 8px'
                                }
                            }}
                        />
                    </Box>

                    <Collapse in={isExpanded} timeout="auto">
                        <Divider sx={{ my: 1 }} />
                        <Tabs
                            value={activeTab}
                            onChange={(e, newValue) => setActiveTab(newValue)}
                            textColor="inherit"
                            sx={{
                                mb: 2,
                                '& .MuiTabs-indicator': {
                                    backgroundColor: '#26a69a'
                                },
                                '& .MuiTab-root.Mui-selected': {
                                    color: '#26a69a'
                                }
                            }}
                        >
                            <Tab 
                                label="Responsibilities" 
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: activeTab === 0 ? '#26a69a' : '#7f8c8d',
                                    minWidth: 'auto',
                                    px: 1,
                                    '&.Mui-selected': {
                                        color: '#26a69a'
                                    }
                                }}
                            />
                            <Tab 
                                label="Skills" 
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: activeTab === 1 ? '#26a69a' : '#7f8c8d',
                                    minWidth: 'auto',
                                    px: 1,
                                    '&.Mui-selected': {
                                        color: '#26a69a'
                                    }
                                }}
                            />
                        </Tabs>
                        {activeTab === 0 && experience.bulletPoints && experience.bulletPoints.length > 0 && (
                            <Box component="ul" sx={{ 
                                pl: 2.5, 
                                pr: 1, 
                                my: 0,
                                '& li': {
                                    color: '#34495e',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.6,
                                    mb: 1,
                                    '&:last-child': {
                                        mb: 0
                                    }
                                }
                            }}>
                                {experience.bulletPoints.map((point, pointIndex) => (
                                    <Box component="li" key={pointIndex}>
                                        {point}
                                    </Box>
                                ))}
                            </Box>
                        )}
                        {activeTab === 1 && (
                            <Grid container spacing={1}>
                                {experience.skills.map((skill, skillIndex) => (
                                    <Grid item xs={6} key={skillIndex}>
                                        <SkillItem 
                                            skill={skill} 
                                            index={index} 
                                            skillIndex={skillIndex} 
                                            isMobile={true}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Collapse>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                        <ExpandButton 
                            isExpanded={isExpanded} 
                            onClick={onToggle} 
                            isMobile={true}
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

