// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import '../../src/styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;