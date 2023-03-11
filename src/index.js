import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<App />} />
            <Route path="resume" element={<Resume />} />
            {/*<Route path="portfolio" element={<Portfolio />} />*/}
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<App />} />
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
