import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import MidpageVideo from '../../assets/videos/Midpage_Extension.mp4';

export default function ChromeExtension() {
    return (
        <Box>
            <Typography variant="h4" align="center" sx={{ color: '#3f5475' }}>Chrome extension using React.js</Typography>
            <video style={{ width: "80%", height: "400px" }}>
                <source src={MidpageVideo} type="video/mp4"/>
                Sorry, your browser doesn't support videos.
            </video>
        </Box>
    )
}
