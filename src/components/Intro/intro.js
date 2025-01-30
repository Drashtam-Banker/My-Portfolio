/*

Intro.js
Drashtam Kinnar Banker
301497001
25 Jan 2025

*/
import React from 'react';
import './intro.css';

const Intro = () => (
    <section id="intro">
        <h1 className='introTitle'>
            Welcome to My Portfolio
        </h1>
        <div className='greetingContainer'>
            <p className='introText'>
                Hello, I'm Drashtam Banker, a passionate web developer dedicated to creating impactful digital solutions.
            </p>
        </div>
        <div className='missionContainer'>
            <p className='missionText'>
                My mission is to innovate, create, and empower through web technologies, ensuring that users' needs come first and their experiences are seamless.
            </p>
        </div>
    </section>
);

export default Intro;
