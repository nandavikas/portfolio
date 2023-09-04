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

import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import {portfolio} from "../constants/portfolio";

import ChromeExtension from "../components/Projects/ChromeExtension";
import ChatBot from "../components/Projects/ChatBot";
import ChatApp from "../components/Projects/ChatApp";
import LicensePlateDetection from "../components/Projects/LicensePlateDetection";
import SentimentAnalysis from "../components/Projects/SentimentAnalysis";
import TaskManager from "../components/Projects/TaskManager";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImgMediaCard() {

    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const handleClickOpen = (title) => {
        setOpen(true);
        setTitle(title);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const renderSwitch = (param) => {
        switch (param) {
            case 'Chrome extension':
                return <ChromeExtension/>
            case 'ChatApp':
                return <ChatApp/>
            case 'Task Manager':
                return <TaskManager/>
            case 'ChatBot':
                return <ChatBot/>
            case 'Sentiment Analysis':
                return <SentimentAnalysis/>
            case 'License Plate Detection':
                return <LicensePlateDetection/>
        }
    }

    return (
        <Box>
            <NavBar/>
            {open && <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar sx={{ backgroundColor: 'black' }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                {
                    renderSwitch(title)
                }
            </Dialog>}
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
                                {/*<Button size="small" onClick={(event) => { handleClickOpen(item.title) }}>View More</Button>*/}
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
