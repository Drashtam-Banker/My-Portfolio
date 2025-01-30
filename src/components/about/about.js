import React from 'react';
import bg from '../../assets/Drashtam.png'; // Your profile image
import Resume from '../../assets/cv.pdf'; // Path to your resume
import './about.css';

const About = () => (
    <section id="about">
        <div className="introContent">
            {/* Image on the left */}
            <div className="imageWrapper">
                <img src={bg} alt="Profile" className="bg" />
            </div>

            {/* Content and button on the right */}
            <div className="textWrapper">
                <span className="hello">Greetings,</span>
                <span className="introText">
                    I am <span className="introName">Drashtam Kinnar Banker</span>, <br />Web Developer
                </span>
                <p className="introPara" style={{ fontSize: '1.2rem' }}>
                    My mission is to design and develop cutting-edge AI solutions that drive innovation, solve complex problems, and enhance human capabilities. I am committed to creating intelligent systems that are ethical, transparent, and impactful, ensuring technology serves to empower individuals, businesses, and society as a whole.
                </p>

                {/* Resume download button */}
                <a href={Resume} download="Drashtam_Kinnar_Banker_Resume" className="resumeBtn">
                    Download Resume
                </a>
            </div>
        </div>
    </section>
);

export default About;
