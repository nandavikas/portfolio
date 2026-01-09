import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

export default function Footer() {
    const linkedInUrl = "https://www.linkedin.com/in/nandavikas/";
    const githubUrl = "https://github.com/nandavikas/"
    const mediumUrl = "https://nandavikas16.medium.com/"

    const handleLinkClick = (url, event) => {
        event.preventDefault();
        event.stopPropagation();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Box>
            <BottomNavigation
                showLabels
                sx={{
                    backgroundColor: "#2c3e50",
                    bottom: 0,
                    position: "fixed",
                    width: "100%",
                    borderTop: '1px solid #34495e',
                    boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
                    '& .MuiBottomNavigationAction-root': {
                        color: '#bdc3c7',
                        cursor: 'pointer',
                        '&.Mui-selected': {
                            color: '#bdc3c7 !important'
                        },
                        '&:hover': {
                            color: '#26a69a !important',
                            backgroundColor: 'rgba(38, 166, 154, 0.1)'
                        }
                    }
                }}
            >
                <BottomNavigationAction
                    label="LinkedIn"
                    icon={<LinkedInIcon />}
                    onClick={(e) => handleLinkClick(linkedInUrl, e)}
                />
                <BottomNavigationAction
                    label="GitHub"
                    icon={<GitHubIcon />}
                    onClick={(e) => handleLinkClick(githubUrl, e)}
                />
                <BottomNavigationAction
                    label="Medium"
                    icon={<ArticleIcon />}
                    onClick={(e) => handleLinkClick(mediumUrl, e)}
                />
            </BottomNavigation>
        </Box>
    );
}
