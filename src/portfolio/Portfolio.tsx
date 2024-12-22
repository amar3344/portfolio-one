import React from 'react'
import "./index.css"

export const Portfolio = () => {
    const logImg = require("./assets/logo.jpg");
    const myImg = require("./assets/myImg.jpg");
    return (
        <div>
            <header>
                <div className="container">
                    <nav className="flex items-centre justify-between">
                        <div className="left flex justfiy-right">
                            <div className="logo">
                                <img src={logImg} width="50px" alt="logo" />
                            </div>
                            <div>
                                <a href="#">Home</a>
                                <a href="#">About</a>
                                <a href="#">Services</a>
                                <a href="#">Blog</a>
                                <a href="#">More</a>
                            </div>
                        </div>
                        <div className="right">
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="hero flex items-centre justify-between">
                <div className="left flex-1 justify-center">
                    <img src={myImg} alt="Profile"/>
                </div>
                <div className="right flex-1">
                    <h6>Amar kumar</h6>
                    <h1>I'm a FullStack<br/> <span>Developer</span></h1>
                    <p>

                    </p>
                    <div>
                        <button className="btn btn-secondary">DOWNLOAD CV</button>
                    </div>
                </div>
            </div>
            <section className="about">
                <div className="container flex items-centre">
                    <div className="left flex-1 justify-right">
                        <img className='imgStyles' src={myImg} height="400px" alt="profile pic" />
                    </div>
                    <div className="right flex-1">
                        <h1>About <span>Me</span></h1>
                        <h3>Hello! I'm Amar kumar</h3>
                        <p>Experienced Full-stack developer with
                            an overall professional background of 2+ years
                            of relevant technical experience. Specializing in HTML,
                            CSS, JavaScript, React, React-Native and TypeScript, Redux Toolkit, Node-Express Js,MongoDB,MySQL,
                            JQuery,Comet-Chat. Proven track record of designing responsive UIs, integrating APIs,
                            and leading successful projects.
                        </p>
                        <div className="socials">
                            <a href="#"><img src="./images/website.png" width="40px" /></a>
                            <a href="#"><img src="./images/facebook.png" width="40px" /></a>
                            <a href="#"><img src="./images/instagram.png" width="40px" /></a>
                            <a href="#"><img src="./images/media-player.png" width="40px" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
