import React from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function ExpandButton({ isExpanded, onClick, isMobile = false }) {
    if (isMobile) {
        return (
            <IconButton
                onClick={onClick}
                sx={{
                    backgroundColor: '#26a69a',
                    color: '#ffffff',
                    width: 28,
                    height: 28,
                    padding: 0,
                    minWidth: 28,
                    boxShadow: '0 2px 6px rgba(38, 166, 154, 0.3)',
                    '&:hover': {
                        backgroundColor: '#00897b',
                        transform: 'scale(1.05)'
                    },
                    transition: 'all 0.2s ease',
                    '& .MuiSvgIcon-root': {
                        fontSize: '16px'
                    }
                }}
            >
                {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
        );
    }

    return (
        <IconButton
            onClick={onClick}
            sx={{
                backgroundColor: '#26a69a',
                color: '#ffffff',
                width: 28,
                height: 28,
                mt: 0.5,
                mb: 2,
                '&:hover': {
                    backgroundColor: '#00897b',
                    transform: 'scale(1.1)'
                },
                transition: 'all 0.3s ease',
                '& .MuiSvgIcon-root': {
                    fontSize: '18px'
                }
            }}
        >
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
    );
}

