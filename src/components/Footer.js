import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    const [value, setValue] = React.useState(0);
    const linkedInUrl = "https://www.linkedin.com/in/nandavikas/";
    const githubUrl = "https://github.com/nandavikas/"

    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{ backgroundColor: "#5e5d59", bottom: 0, position: "fixed", width: "100%" }}
            >
                <BottomNavigationAction label="LinkedIn" style={{ color: "white" }} icon={<LinkedInIcon />} href={linkedInUrl}/>
                <BottomNavigationAction label="GitHub" style={{ color: "white" }} icon={<GitHubIcon />} href={githubUrl}/>
            </BottomNavigation>
        </Box>
    );
}
