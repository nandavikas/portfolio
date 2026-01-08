import React, { useState } from 'react';
import Box from "@mui/material/Box";
import NavBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MailIcon from '@mui/icons-material/Mail';
import Button from "@mui/material/Button";
import ReactTypingEffect from "react-typing-effect";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();

export default function Contact() {

    const [emailError, setEmailError] = useState(false);
    const [messageDetails, setMessageDetails] = useState();

    const handleNameChange = (event) => {
        setMessageDetails({ ...messageDetails, name: event.target.value });
    };

    const handleSubjectChange = (event) => {
        setMessageDetails({ ...messageDetails, subject: event.target.value });
    };

    const handleMessageChange = (event) => {
        setMessageDetails({ ...messageDetails, message: event.target.value });
    };

    const handleEmailIdChange = (event) => {
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const value = event.target.value;
        // Show error only if there's a value and it's invalid
        const hasError = value && !emailRegex.test(value);
        setEmailError(hasError);
        setMessageDetails({ ...messageDetails, emailId: value });
    };

    const onSubmit = () => {
        console.log('Message details: ' + JSON.stringify(messageDetails));
        toast.success("Message sent successfully!");
    }


    return (
        <Box sx={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <NavBar />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="sm">
                    <CssBaseline />
                    <Box
                        component="form"
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '85vh',
                            py: 4
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Box sx={{
                            mb: 4,
                            textAlign: 'center',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Box sx={{
                                display: 'block',
                                width: '100%',
                                mb: 2
                            }}>
                                <MailIcon sx={{
                                    fontSize: 64,
                                    color: '#26a69a',
                                    display: 'block',
                                    mx: 'auto'
                                }} />
                            </Box>
                            <Box sx={{
                                width: '100%',
                                minHeight: '2.5rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <ReactTypingEffect
                                    text={["Drop a message to collaborate"]}
                                    speed={100}
                                    eraseSpeed={100}
                                    eraseDelay={10000000}
                                    typingDelay={1000}
                                    cursorRenderer={cursor => (
                                        <Typography variant="h5" sx={{ color: '#2c3e50', fontWeight: 600 }}>
                                            {cursor}
                                        </Typography>
                                    )}
                                    displayTextRenderer={(text, i) => {
                                        return (
                                            <Typography variant="h5" sx={{ color: '#34495e', fontWeight: 500 }}>
                                                {text.split('').map((char, i) => {
                                                    const key = `${i}`;
                                                    return (
                                                        <span key={key}>{char}</span>
                                                    );
                                                })}
                                            </Typography>
                                        );
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ width: '100%', maxWidth: 500 }}>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                sx={{
                                    mb: 2,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: '#ffffff',
                                        '&:hover fieldset': {
                                            borderColor: '#26a69a',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#26a69a',
                                        }
                                    }
                                }}
                                onChange={handleNameChange}
                                fullWidth
                            />
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                sx={{
                                    mb: 2,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: '#ffffff',
                                        '&:hover fieldset': {
                                            borderColor: '#26a69a',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#26a69a',
                                        }
                                    }
                                }}
                                error={emailError}
                                onChange={handleEmailIdChange}
                                fullWidth
                            />
                            <TextField
                                id="subject"
                                label="Subject"
                                variant="outlined"
                                sx={{
                                    mb: 2,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: '#ffffff',
                                        '&:hover fieldset': {
                                            borderColor: '#26a69a',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#26a69a',
                                        }
                                    }
                                }}
                                onChange={handleSubjectChange}
                                fullWidth
                            />
                            <TextField
                                id="message"
                                label="Message"
                                variant="outlined"
                                multiline
                                maxRows={6}
                                onChange={handleMessageChange}
                                minRows={4}
                                sx={{
                                    mb: 3,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: '#ffffff',
                                        '&:hover fieldset': {
                                            borderColor: '#26a69a',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#26a69a',
                                        }
                                    }
                                }}
                                fullWidth
                            />
                            <Button
                                type="button"
                                id="submit"
                                variant="contained"
                                onClick={(e) => onSubmit()}
                                sx={{
                                    width: '100%',
                                    py: 1.5,
                                    color: 'white',
                                    backgroundColor: '#26a69a',
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    boxShadow: '0 4px 12px rgba(38, 166, 154, 0.3)',
                                    ":hover": {
                                        backgroundColor: "#00897b",
                                        boxShadow: '0 6px 16px rgba(38, 166, 154, 0.4)',
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.2s ease'
                                }}>
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <Footer />
            <ToastContainer />
        </Box>
    );
}
