import ReactTypingEffect from 'react-typing-effect';
import Box from "@mui/material/Box";

import NavBar from './components/NavigationBar';
import nanda from './assets/nanda.jpg';
import './App.css';
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Box>
            <NavBar/>
            <div className="App">
                <header className="App-header">
                    <img src={nanda} className="Profile-pic" alt="logo"/>
                    <h5 style={{color: '#362e2e', marginBottom: '0px'}}>Nanda Vikas Konduru</h5>
                    <ReactTypingEffect
                        text={["Software Development Engineer", "Full-Stack Engineer", "Frontend Engineer", "Backend Engineer"]}
                        speed={100}
                        eraseSpeed={100}
                        eraseDelay={1000}
                        typingDelay={1000}
                        cursorRenderer={cursor => <h6 style={{color: '#000000', marginTop: '0px'}}>{cursor}</h6>}
                        displayTextRenderer={(text, i) => {
                            return (
                                <h6 style={{color: '#575151', marginTop: '10px' }}>
                                    {text.split('').map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                            <span
                                                key={key}
                                            >{char}</span>
                                        );
                                    })}
                                </h6>
                            );
                        }}
                    />
                </header>
            </div>
            <Footer />
        </Box>
    );
}

export default App;
