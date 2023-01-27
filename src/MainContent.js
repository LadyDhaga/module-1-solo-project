import React from "react";
import { ReactDOM } from "react";

export default function MainContent(){
    return (
        <div className="cover">
            <div> 
                <div className="content-container">
                    <div className="img-container">
                        <img src="https://images.unsplash.com/photo-1659087805683-394473f09b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="logo"></img>
                    </div>
                    <div className="text-container">
                        <div className="name-work-place">
                            <h1>Manpreet Kumari</h1>
                            <h2>Lawyer</h2>
                            <h3>Punjab & Haryana High Court, Punjab</h3>
                        </div>

                        <div className="buttons">
                            <a className="email" href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Email</a>
                            <a className="linkedin" href="https://www.linkedin.com/feed/" target="_blank">LinkedIn</a>
                        </div>

                        <div className="about-interests">
                            <div className="about-container">
                                <h2>About</h2>
                                <p>I am an under-graduate Law student at punjabi University, Patiala. My favourite subjects are constituition and criminal Law. I try to not to show-off my intelligence to others and keep it to me, but it just overflows always</p>
                            </div>

                            <div className="interests-container"></div>
                                <h2>Interests</h2>
                                <p>writing poetry(and then posting it some platforms or my what'sapp status), reading punjabi novels, watching stupid pakistani dramas with obvious stories etc.</p>
                            </div>
                        </div>
                        <footer className="footer-container">
                            <div className="footer-icon-container">
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png" alt="hi"/>
                                <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" alt="hi"/>
                                <img src="https://img.icons8.com/ios-filled/27/000000/facebook--v1.png" alt="hi"/>
                                <img src="https://img.icons8.com/ios-glyphs/27/000000/github.png" alt="hi"/>
                            </div>
                        </footer>
                    </div>
            </div>
            </div>
    );
}