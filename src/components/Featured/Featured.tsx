import React from "react";
import "./featured.scss";
import ProjectCard from "../Project-Card/Project-Card";
import sfdbThumb from "../../assets/images/sfdb-thumb.png";
import gggThumb from "../../assets/images/VOAoMl9.png";
import gw2Thumb from "../../assets/images/dUPgrZs.jpeg";
import gen2Thumb from "../../assets/images/JzMQWLQ.jpeg";
import reactIcon from "../../assets/icons/icons8-react-native-50.png";
import htmlIcon from "../../assets/icons/icons8-html-50.png";
import cssIcon from "../../assets/icons/icons8-css-50.png";
import nodeIcon from "../../assets/icons/icons8-nodejs-50.png";
import jsIcon from "../../assets/icons/icons8-javascript-50.png";
import tsIcon from "../../assets/icons/icons8-typescript-50.png";
import expressIcon from "../../assets/icons/icons8-express-js-50.png";
import mysqlIcon from "../../assets/icons/icons8-mysql-50.png";
import sassIcon from "../../assets/icons/icons8-sass-50.png";
import restIcon from "../../assets/icons/icons8-rest-api-50.png";
import wpIcon from "../../assets/icons/icons8-wordpress-50.png";
//

const Featured: React.FC = () =>{
    return (
        <div className="featured">
            <div className="featured__header">
                <h1 className="featured__header-text">Featured Projects</h1>
                <p className="featured__subheader">Check out some of my recent web development projects.</p>    
            </div>
            <div className="featured__project-container">
                <ProjectCard title="GoGoGrocery" description="A meal planning web-app designed to help users figure out what they need at the grocery store. Choose what you want to eat each day and you'll get a nutritional breakdown for each day, as well as an itemized list of foods to make shopping easier." imgUrl={gggThumb} techIcon1={tsIcon} techIcon2={reactIcon} techIcon3={sassIcon} techIcon4={htmlIcon} techIcon5={restIcon} repoUrl="https://github.com/mstaples95/GoGoGrocery-Frontend" siteUrl="https://go-go-grocery.vercel.app/" />
                <ProjectCard title="Street Fighter DB" description="An open-source API project for developers and fans of street Fighter. Dive deep into detailed profiles of each fighter, from their iconic moves to their rich backstories, all at your fingertips." imgUrl={sfdbThumb} techIcon1={jsIcon} techIcon2={nodeIcon} techIcon3={expressIcon} techIcon4={mysqlIcon} techIcon5={restIcon} repoUrl="https://github.com/mstaples95/Street-Fighter-API-" siteUrl="https://street-fighter-database-client.vercel.app/"/>
                <ProjectCard title="GW2 PVP Stats" description="A tool for players to see their ranked and unranked PVP progression. Using the official Guild Wars 2 API, users can retrieve data for their unique characters and see their stats on a per character or accountwide basis." imgUrl={gw2Thumb} techIcon1={jsIcon} techIcon2={htmlIcon} techIcon3={sassIcon} techIcon4={nodeIcon} techIcon5={reactIcon} repoUrl="https://github.com/mstaples95/gw2-pvp-stats" siteUrl="https://gw2-pvp-stats.vercel.app/"/>
                <ProjectCard title=" Gen 2 Pokemon Quiz" description="An app where you answer a variety of questions to find out what Pokemon matches your personality. Are you tough like a Granbull or as smart as Xatu? " imgUrl={gen2Thumb} techIcon1={jsIcon} techIcon2={htmlIcon} techIcon3={cssIcon} techIcon4={restIcon} techIcon5={wpIcon} repoUrl="https://github.com/mstaples95/pokemon-quiz-client" siteUrl="https://pokemon-quiz-client.vercel.app/"/>
            </div>
        </div>
    )
}

export default Featured;