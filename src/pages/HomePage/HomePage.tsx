import React, { useEffect, useState } from "react";
import './homepage.scss'
import Spline from '@splinetool/react-spline';
import ButtonMedium from "../../components/Button-Medium/Button-Medium";
import mobileImg from "../../assets/images/mobilebg3.png"
import tabletImg from "../../assets/images/tabletbg5.png"
import desktopImg from "../../assets/images/desktopunion.png"
import Featured from "../../components/Featured/Featured";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
//
const HomePage: React.FC = () => {
    const [heroImg, setHeroImg] = useState(mobileImg);

    const handleProjectClick = () => {
        document.getElementById('projects')?.scrollIntoView({behavior:'smooth'});
    }
    const handleContactClick = () => {
        document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
    }

    useEffect(() => {
        const updateImg = () => {
                    if (window.innerWidth > 1279) {
                        setHeroImg(desktopImg);
                        } else if (window.innerWidth > 767) {
                        setHeroImg(tabletImg);
                        } else {
                        setHeroImg(mobileImg);
                    }
                    };

            window.addEventListener('resize', updateImg);
            updateImg();

            return () => window.removeEventListener('resize', updateImg);
    }, []);
        

    return (

    <>
        <div className="hero animated-background">
            <Spline className="spline-background" scene="https://prod.spline.design/uORpzMX5tfL0sDcn/scene.splinecode" />
                <div className="hero__main">                   
                    <div className="hero__text-content">
                        <h1 className="hero__header">Matthew Staples</h1>
                        <h2 className="hero__sub-header">Freelance Web Developer</h2>
                        <p className="hero__text">
                            I'm a skilled freelance web developer with a passion for creating beautiful and functional websites. I specialize in modern front-end technologies and have experience building responsive, scalable, and user-friendly web applications.
                        </p>
                    </div>
                    <div className="hero__button-container">
                        <ButtonMedium title="Projects" onClick={handleProjectClick} backgroundColor="#4f518c" textColor="black" hoverBackgroundColor="#2c2a4a" hoverTextColor="white" activeBackgroundColor="black"/>
                        <ButtonMedium title= "Contact Me" onClick={handleContactClick} backgroundColor="#907ad6" textColor="black" hoverBackgroundColor="#2c2a4a" hoverTextColor="white" activeBackgroundColor="black"/>
                    </div>    
                </div>
                <div className="hero__img-container">
                    <img className="hero__img" src={heroImg} alt="placeholder" />   
                </div>   
        </div>
        <div>
            <div id="projects">
                <Featured/>    
            </div>
            <div id="about">
                <About/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </div>
    </> 
    )
}

export default HomePage;