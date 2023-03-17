import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import {portfolio} from "../constants/portfolio";

export default function ImgMediaCard() {
    return (
        <Box>
            <NavBar/>
            <Grid container spacing={2}
                  sx={{ marginTop: '10px', marginBottom: '50px' }}
                  justifyContent="center">
                {portfolio.map((item,index) => (
                    <Grid item s={4} key={item.title+"-"+index}>
                        <Card sx={{ maxWidth: 345, margin: '10px' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="180"
                                image={item.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View More</Button>
                                <Button size="small" href={item.github} target="_blank">Open GitHub</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Footer/>
        </Box>
    );
}
