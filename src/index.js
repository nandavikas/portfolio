import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from "./pages/Contact";
import Experience from "./pages/Experience/index";
import Portfolio from "./pages/Portfolio";
import 'react-toastify/dist/ReactToastify.css';
import Blogs from "./pages/Blogs";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="experience" element={<Experience />} />
            <Route path="resume" element={<Experience />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<App />} />
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
