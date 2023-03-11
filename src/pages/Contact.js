import React, {useState, useRef} from 'react';
import Box from "@mui/material/Box";
import NavBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import TextField from "@mui/material/TextField";
import MailIcon from '@mui/icons-material/Mail';
import Button from "@mui/material/Button";
import ReactTypingEffect from "react-typing-effect";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";
import {useSnackbar} from "notistack";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();

export default function Contact() {

    const [error, setError] = useState(false);
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

    const notify = () => toast.success("Wow so easy!");

    const handleEmailIdChange = (event) => {
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid =
            event.target.value && emailRegex.test(event.target.value)
                ? true
                : false;
        setError(isValid);
        setMessageDetails({ ...messageDetails, emailId: event.target.value });
    };

    const onSubmit = () => {
        console.log('Message details: ' + JSON.stringify(messageDetails));
        toast.success("Message sent successfully!");
    }


    return (
        <Box>
            <NavBar/>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        component="form"
                        sx={{
                            'width': '100%',
                            'display': 'flex',
                            'flex-direction': 'column',
                            'align-items': 'center',
                            'align-content': 'center',
                            'justify-content': 'center',
                            'min-height': '85vh',
                            'vertical-align': 'middle',
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <MailIcon sx={{
                            'fontSize': 70
                        }}/>
                        <ReactTypingEffect
                            text={["Drop a message to collaborate"]}
                            speed={100}
                            eraseSpeed={100}
                            eraseDelay={10000000}
                            typingDelay={1000}
                            cursorRenderer={cursor => <h4 style={{color: '#000000', margin: '0px'}}>{cursor}</h4>}
                            displayTextRenderer={(text, i) => {
                                return (
                                    <h4 style={{color: '#575151', margin: '0px'}}>
                                        {text.split('').map((char, i) => {
                                            const key = `${i}`;
                                            return (
                                                <span
                                                    key={key}
                                                >{char}</span>
                                            );
                                        })}
                                    </h4>
                                );
                            }}
                        />
                        <TextField id="name" label="Name" variant="filled" sx={{margin: '10px'}} onChange={handleNameChange}
                                   fullWidth/>
                        <TextField id="email" label="Email" variant="filled" sx={{margin: '10px'}} error={error}
                                   onChange={handleEmailIdChange} fullWidth/>
                        <TextField id="subject" label="Subject" variant="filled" sx={{margin: '10px'}} onChange={handleSubjectChange}
                                   fullWidth/>
                        <TextField id="message" label="Message" variant="filled" multiline maxRows={6} onChange={handleMessageChange}
                                   minRows={4}
                                   sx={{margin: '10px'}} fullWidth/>
                        <Button
                            type="button"
                            id="submit"
                            variant="contained"
                            // onClick={(e) => onSubmit(e)}
                            onClick={(e) => onSubmit() }
                            sx={{
                                width: '50%',
                                margin: '10px',
                                color: 'white',
                                backgroundColor: 'black',
                                ":hover": {
                                    bgcolor: "#33312c",
                                    color: "white"
                                }
                            }}>
                            Submit
                        </Button>
                    </Box>
                </Container>
            </ThemeProvider>
            <Footer/>
            <ToastContainer />
        </Box>
    );
}
