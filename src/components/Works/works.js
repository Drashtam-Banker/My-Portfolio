import React from 'react';
import { FaAndroid } from 'react-icons/fa'; // Importing only the Android icon
import './works.css';

const worksData = [
    {
        id: 1,
        title: "Housing Management System",
        link: "https://github.com/Drashtam/Society-Management",
        platform: "android", // Platform is Android
        
    },
];

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">My educational background, technical expertise, and professional experiences have prepared me to excel in this role. My most recent position at Bosch Global Software Technologies and during my time at University of Texas at Arlington as a Graduate Student allowed me to work on significant projects across a variety of tech stacks.</span>
            <div className="worksImgs">
                {worksData.map((project) => (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="worksImgContainer" key={project.id}>
                        <img src={project.imageUrl} alt={project.title} className="worksImg" />
                        <div className="worksImgOverlay">
                            <h3 className="projectTitle">{project.title}</h3>
                            <p className="projectDescription">{project.description}</p>
                            {/* Display the Android icon if platform is Android */}
                            <div className="platformIcon">
                                {project.platform === "android" && <FaAndroid size={40} color="#3ddc84" />}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Works;
