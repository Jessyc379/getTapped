import { useState } from "react";
import demoService from "../../services/demo-service"
import './Home.css';
import heroImage from '../../assets/images/homepage-image.jpg';

export default function Home() {
    return (
        <>
            <div className="hero-container">
                <img src={heroImage} alt="Hero" className="hero-image" />
            </div>
            <div className="container home-content">
                <h1 id="header-login">Welcome to GetTapped</h1>
                <p id="header-body">Explore breweries and enjoy great drinks with us!</p>
            </div>
        </>
    );
}