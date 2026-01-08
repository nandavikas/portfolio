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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import { portfolio } from "../constants/portfolio";

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
    const [title] = React.useState("");
    // const handleClickOpen = (title) => {
    //     setOpen(true);
    //     setTitle(title);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    const renderSwitch = (param) => {
        switch (param) {
            case 'Chrome extension':
                return <ChromeExtension />
            case 'ChatApp':
                return <ChatApp />
            case 'Task Manager':
                return <TaskManager />
            case 'ChatBot':
                return <ChatBot />
            case 'Sentiment Analysis':
                return <SentimentAnalysis />
            case 'License Plate Detection':
                return <LicensePlateDetection />
            default:
                return null;
        }
    }

    return (
        <Box sx={{ backgroundColor: '#f8f9fa', minHeight: '100vh', pb: 10 }}>
            <NavBar />
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
            <Grid container
                spacing={{ xs: 3, sm: 3, md: 2 }}
                sx={{
                    marginTop: '40px',
                    marginBottom: '80px',
                    padding: { xs: '20px', sm: '30px', md: '20px', lg: '40px' },
                    maxWidth: { md: '1200px', lg: '1400px' },
                    margin: { md: '40px auto 80px' }
                }}
                justifyContent="center">
                {portfolio.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={item.title + "-" + index}>
                        <Card
                            sx={{
                                maxWidth: { xs: '100%', sm: 400, md: '100%' },
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '16px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                                },
                                overflow: 'hidden'
                            }}
                        >
                            <CardMedia
                                component="img"
                                alt={item.title}
                                height="200"
                                image={item.image}
                                sx={{
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    }
                                }}
                            />
                            <CardContent sx={{
                                flexGrow: 1,
                                padding: '24px',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontWeight: 600,
                                        color: '#2c3e50',
                                        marginBottom: '12px',
                                        fontSize: { xs: '1.25rem', sm: '1.5rem' }
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.6,
                                        color: '#34495e',
                                        flexGrow: 1,
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{
                                padding: '16px 24px 24px',
                                justifyContent: 'flex-end'
                            }}>
                                <Button
                                    size="medium"
                                    href={item.github}
                                    target="_blank"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#26a69a',
                                        color: 'white',
                                        borderRadius: '8px',
                                        padding: '10px 24px',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        boxShadow: '0 2px 8px rgba(38, 166, 154, 0.3)',
                                        '&:hover': {
                                            backgroundColor: '#00897b',
                                            boxShadow: '0 4px 12px rgba(38, 166, 154, 0.4)',
                                            transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.2s ease-in-out'
                                    }}
                                >
                                    Open GitHub
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </Box>
    );
}
