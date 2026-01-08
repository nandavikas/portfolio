import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import CompanyLogo from './CompanyLogo';
import SkillItem from './SkillItem';

export default function DesktopExperienceCard({ experience, index, isExpanded }) {
    return (
        <Collapse in={isExpanded} timeout="auto">
            <Card
                sx={{
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                    border: '1px solid #e8eaed',
                    overflow: 'hidden',
                    mb: 2
                }}
            >
                <CardContent sx={{ p: 2.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CompanyLogo 
                            logo={experience.logo} 
                            logoAlt={experience.logoAlt} 
                            size={45} 
                            borderWidth="2px"
                            isMobile={false}
                        />
                        <Box sx={{ ml: 2 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#2c3e50',
                                    fontWeight: 700,
                                    fontSize: '1.15rem',
                                    mb: 0.25
                                }}
                            >
                                {experience.companyName}
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#26a69a',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    mb: 0.75
                                }}
                            >
                                {experience.jobTitle}
                            </Typography>
                            <Chip
                                label={experience.dateRange}
                                sx={{
                                    backgroundColor: '#f0f4f8',
                                    color: '#34495e',
                                    fontWeight: 500,
                                    fontSize: '0.7rem',
                                    height: 22
                                }}
                            />
                        </Box>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Grid container spacing={3}>
                        {experience.bulletPoints && experience.bulletPoints.length > 0 && (
                            <Grid item xs={12} md={7}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: '#7f8c8d',
                                        fontWeight: 600,
                                        fontSize: '0.75rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        mb: 1.5
                                    }}
                                >
                                    Responsibilities
                                </Typography>
                                <Box component="ul" sx={{ 
                                    pl: 2.5, 
                                    pr: 1, 
                                    my: 0,
                                    '& li': {
                                        color: '#34495e',
                                        fontSize: '0.9rem',
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
                            </Grid>
                        )}
                        <Grid item xs={12} md={5}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    color: '#7f8c8d',
                                    fontWeight: 600,
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    mb: 1.5
                                }}
                            >
                                Skills & Technologies
                            </Typography>
                            <Grid container spacing={1}>
                                {experience.skills.map((skill, skillIndex) => (
                                    <Grid item xs={6} key={skillIndex}>
                                        <SkillItem 
                                            skill={skill} 
                                            index={index} 
                                            skillIndex={skillIndex} 
                                            isMobile={false}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Collapse>
    );
}

