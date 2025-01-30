import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
import GithubIcon from '../../assets/github.png';
import LinkedinIcon from '../../assets/linkedin.png';
import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Ensure you use your correct service ID, template ID, and user ID
        emailjs.sendForm('service_58oo73s', 'template_s878202', form.current, 'Yyj0C289nj8174GmL')
            .then((result) => {
                console.log(result.text);
                e.target.reset();  // Reset form after success
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">
                    Please fill out the form below to discuss any work opportunities.
                </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        className="name"
                        placeholder="Your Name"
                        name="your_name"
                        required
                    />
                    <input
                        type="email"
                        className="email"
                        placeholder="Your Email"
                        name="your_email"
                        required
                    />
                    <textarea
                        className="msg"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" value="Send" className="submitBtn">
                        Submit
                    </button>
                    <div className="links">
                        <a
                            href="https://in.linkedin.com/in/drashtam-banker-741a821a5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={LinkedinIcon} alt="LinkedIn" className="link" />
                        </a>
                        <a
                            href="https://github.com/Drashtam-Banker"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={GithubIcon} alt="GitHub" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
