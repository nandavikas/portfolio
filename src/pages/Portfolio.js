import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export default function Portfolio () {
    return (
        <Box>
            <NavBar />
            <Typography variant="h3">Portfolio</Typography>
            <Footer />
        </Box>
    );
}
