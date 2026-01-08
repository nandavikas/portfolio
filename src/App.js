import ReactTypingEffect from 'react-typing-effect';
import Box from "@mui/material/Box";

import NavBar from './components/NavigationBar';
import nanda from './assets/nanda.jpg';
import './App.css';
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Box sx={{ 
            backgroundColor: '#f8f9fa', 
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        }}>
            <NavBar/>
            <div className="App" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}>
                <header className="App-header">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: { xs: '20px 20px', sm: '30px 30px', md: '40px 40px' },
                            width: '100%',
                            maxWidth: '100%',
                            zIndex: 1,
                            flex: 1
                        }}
                    >
                        <img 
                            src={nanda} 
                            className="Profile-pic" 
                            alt="Nanda Vikas Konduru"
                            style={{
                                marginBottom: '24px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                                border: '4px solid #ffffff'
                            }}
                        />
                        <h1 style={{
                            color: '#2c3e50',
                            marginBottom: '16px',
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.5px'
                        }}>
                            Nanda Vikas Konduru
                        </h1>
                        <ReactTypingEffect
                            text={["Software Development Engineer", "Full-Stack Engineer", "Frontend Engineer", "Backend Engineer"]}
                            speed={100}
                            eraseSpeed={100}
                            eraseDelay={1000}
                            typingDelay={1000}
                            cursorRenderer={cursor => (
                                <span style={{
                                    color: '#26a69a',
                                    marginTop: '0px',
                                    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                                    fontWeight: 500
                                }}>
                                    {cursor}
                                </span>
                            )}
                            displayTextRenderer={(text, i) => {
                                return (
                                    <h2 style={{
                                        color: '#34495e',
                                        marginTop: '12px',
                                        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                                        fontWeight: 400,
                                        letterSpacing: '0.3px'
                                    }}>
                                        {text.split('').map((char, i) => {
                                            const key = `${i}`;
                                            return (
                                                <span
                                                    key={key}
                                                >{char}</span>
                                            );
                                        })}
                                    </h2>
                                );
                            }}
                        />
                    </Box>
                </header>
            </div>
            <Footer />
        </Box>
    );
}

export default App;
