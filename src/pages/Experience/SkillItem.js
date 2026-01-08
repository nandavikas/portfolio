import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/lab/Rating';

export default function SkillItem({ skill, index, skillIndex, isMobile = false }) {
    if (isMobile) {
        return (
            <Box
                sx={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '5px',
                    padding: 0.6,
                    border: '1px solid #e8eaed',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        backgroundColor: '#ffffff',
                        borderColor: '#26a69a',
                        transform: 'translateY(-1px)',
                        boxShadow: '0 2px 6px rgba(38, 166, 154, 0.15)'
                    }
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: '#2c3e50',
                        fontWeight: 600,
                        fontSize: '0.65rem',
                        mb: 0.3,
                        lineHeight: 1.2
                    }}
                >
                    {skill.name}
                </Typography>
                <Rating
                    name={`rating-${index}-${skillIndex}`}
                    value={Number(skill.rating)}
                    precision={0.5}
                    readOnly
                    size="small"
                    sx={{
                        '& .MuiRating-icon': {
                            fontSize: '10px',
                            color: '#26a69a'
                        },
                        '& .MuiRating-iconEmpty': {
                            color: '#e0e0e0'
                        }
                    }}
                />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                padding: 1.25,
                border: '1px solid #e8eaed',
                transition: 'all 0.2s ease',
                textAlign: 'center',
                '&:hover': {
                    backgroundColor: '#ffffff',
                    borderColor: '#26a69a',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 2px 8px rgba(38, 166, 154, 0.15)'
                }
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    color: '#2c3e50',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    mb: 0.75
                }}
            >
                {skill.name}
            </Typography>
            <Rating
                name={`rating-${index}-${skillIndex}`}
                value={Number(skill.rating)}
                precision={0.5}
                readOnly
                size="small"
                sx={{
                    '& .MuiRating-icon': {
                        fontSize: '14px',
                        color: '#26a69a'
                    },
                    '& .MuiRating-iconEmpty': {
                        color: '#e0e0e0'
                    }
                }}
            />
        </Box>
    );
}

