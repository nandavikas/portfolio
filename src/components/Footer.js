import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

export default function Footer() {
    const [value, setValue] = React.useState(0);
    const linkedInUrl = "https://www.linkedin.com/in/nandavikas/";
    const githubUrl = "https://github.com/nandavikas/"
    const mediumUrl = "https://nandavikas16.medium.com/"

    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{ 
                    backgroundColor: "#2c3e50",
                    bottom: 0,
                    position: "fixed",
                    width: "100%",
                    borderTop: '1px solid #34495e',
                    boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
                    '& .MuiBottomNavigationAction-root': {
                        color: '#bdc3c7',
                        '&.Mui-selected': {
                            color: '#26a69a'
                        },
                        '&:hover': {
                            color: '#26a69a',
                            backgroundColor: 'rgba(38, 166, 154, 0.1)'
                        }
                    }
                }}
            >
                <BottomNavigationAction 
                    label="LinkedIn" 
                    icon={<LinkedInIcon />} 
                    href={linkedInUrl}
                    target="_blank"
                />
                <BottomNavigationAction 
                    label="GitHub" 
                    icon={<GitHubIcon />} 
                    href={githubUrl}
                    target="_blank"
                />
                <BottomNavigationAction 
                    label="Medium" 
                    icon={<ArticleIcon />} 
                    href={mediumUrl}
                    target="_blank"
                />
            </BottomNavigation>
        </Box>
    );
}
