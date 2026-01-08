import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/lab/Rating';

export default function SkillItem({ skill, index, skillIndex, isMobile = false }) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                py: 0.5
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    color: '#2c3e50',
                    fontWeight: 500,
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    minWidth: isMobile ? '80px' : '100px'
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
                        fontSize: isMobile ? '12px' : '14px',
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

