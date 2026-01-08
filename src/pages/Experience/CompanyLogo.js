import React from 'react';
import Box from '@mui/material/Box';

export default function CompanyLogo({ logo, logoAlt, size = 56, borderWidth = '1px', isMobile = false }) {
    const containerSize = isMobile ? size : size;
    
    return (
        <Box
            sx={{
                width: containerSize,
                height: containerSize,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: `${borderWidth} solid #26a69a`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                ...(isMobile ? {} : {
                    boxShadow: '0 3px 12px rgba(38, 166, 154, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 4px 16px rgba(38, 166, 154, 0.4)'
                    }
                })
            }}
        >
            <img
                src={logo}
                alt={logoAlt}
                style={{
                    width: '75%',
                    height: '75%',
                    objectFit: 'contain',
                    borderRadius: '50%'
                }}
            />
        </Box>
    );
}

