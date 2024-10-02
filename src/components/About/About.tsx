import React from "react";
import "./about.scss";
import ButtonMedium from "../Button-Medium/Button-Medium";
import reactIcon from "../../assets/icons/icons8-react-native-50.png";
import htmlIcon from "../../assets/icons/icons8-html-50.png";
import cssIcon from "../../assets/icons/icons8-css-50.png";
import nodeIcon from "../../assets/icons/icons8-nodejs-50.png";
import jsIcon from "../../assets/icons/icons8-javascript-50.png";
import tsIcon from "../../assets/icons/icons8-typescript-50.png";
import expressIcon from "../../assets/icons/icons8-express-js-50.png";
import mysqlIcon from "../../assets/icons/icons8-mysql-50.png";
import pyIcon from "../../assets/icons/icons8-python-50.png";
import gitIcon from "../../assets/icons/icons8-git-50.png";
import githubIcon from "../../assets/icons/icons8-github-50.png";
import sassIcon from "../../assets/icons/icons8-sass-50.png";
import restIcon from "../../assets/icons/icons8-rest-api-50.png";
import clIcon from "../../assets/icons/icons8-powershell-50.png";
import wpIcon from "../../assets/icons/icons8-wordpress-50.png";
import profile from "../../assets/images/Matthew-Staples--Software-Engineering---Aug-2023--2 (1).jpg"



const About: React.FC = () =>{
    const handleHireClick = () => {
        document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
    }
    const handleDownloadClick = () => {
        const link = document.createElement('a');
        link.href = '/M Staples Resume 04_05 (1).pdf';
        link.download ='M Staples Resume 04_05 (1).pdf';
        link.click();
    }
    return (
        <div className="about">
            <div className="about__header">
                <h1 className="about__header-text">About Me</h1>
                <div className="about__button-container">
                <ButtonMedium textColor="black" onClick={handleHireClick} backgroundColor="#4f518c" title="Hire Me" hoverBackgroundColor="#2c2a4a" hoverTextColor="white" activeBackgroundColor="black"/>
                <ButtonMedium onClick={handleDownloadClick} textColor="black" backgroundColor="#907ad6" title="Download CV" hoverBackgroundColor="#2c2a4a" hoverTextColor="white" activeBackgroundColor="black"/>
                </div>
            </div>
            <div className="about__text-content">
                <div className="about__left">
                    <div className="about__main-text">
                        <p className="about__sub-text">
                        I'm Matthew Staples, a Toronto-based Full Stack Developer with a passion for crafting software solutions that improve lives and solve real-world problems. With experience in both front-end and back-end development, I bring a strong skill set in React, Node.js, MySQL, and more, complemented by a background in UI design. My work spans personal projects like GoGoGrocery and Street Fighter DB, where I led development and design, to collaborative industry projects such as a wealth management app prototype. I'm driven by the transformative potential of technology and committed to building scalable, impactful applications.
                        </p>
                    </div>
                    <div className="about__subheading">
                        <div className="about__subheading-right">
                            <h3 className="about__subheader">Experience</h3>
                            <ul className="about__list">
                                <li>Worked with clients in various industries.</li>
                                <li>Delivered high-quality, responsive websites.</li>
                                <li>Created wireframes, mock-ups, and prototypes to visualize website designs.</li>
                                <li>Integrated back-end services and APIs to enhance website functionality.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="about__right">
                    <img className="about__profile-img" src={profile} alt="profile"/>
                </div>
            </div>
            <div className="about__tech">
                    <h2 className="about__tech-heading">Tech Toolbox</h2>
                    <ul className="about__tech-list">
                            <li className="about__list-item" >
                                <img className="about__list-img" src={reactIcon} alt="ReactIcon" />
                                <span className="about__item-name">React</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={htmlIcon} alt="ReactIcon" />
                                <span className="about__item-name">HTML5</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={cssIcon} alt="ReactIcon" />
                                <span className="about__item-name">CSS3</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={nodeIcon} alt="ReactIcon" />
                                <span className="about__item-name">Node</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={jsIcon} alt="ReactIcon" />
                                <span className="about__item-name">Javascript</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={tsIcon} alt="ReactIcon" />
                                <span className="about__item-name">Typescript</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={expressIcon} alt="ReactIcon" />
                                <span className="about__item-name">Express</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={mysqlIcon} alt="ReactIcon" />
                                <span className="about__item-name">MySQL</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={pyIcon} alt="ReactIcon" />
                                <span className="about__item-name">Python</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={gitIcon} alt="ReactIcon" />
                                <span className="about__item-name">Git</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={githubIcon} alt="ReactIcon" />
                                <span className="about__item-name">Github</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={sassIcon} alt="ReactIcon" />
                                <span className="about__item-name">Sass</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={restIcon} alt="ReactIcon" />
                                <span className="about__item-name">Rest API</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={clIcon} alt="ReactIcon" />
                                <span className="about__item-name">Command Line</span>
                            </li>
                            <li className="about__list-item" >
                                <img className="about__list-img" src={wpIcon} alt="ReactIcon" />
                                <span className="about__item-name">Wordpress</span>
                            </li>
                    </ul>
                </div>
                
        </div>
    );
}

export default About;