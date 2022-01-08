import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTSANTS = {
        description: 'I am Aeronautical Engineer & Aircraft Mechanic. 1st Master in Marine Technology and Science. 2nd Master in Computational Engineering. Experienced in Flight Mishap Investigation-Flight Safety. Specialties: Solidworks; Ansys; Python; matlab;advanced Excel knowledge; Book lover and addicted to chess. ',
        highlights: {
            bullets: [
                "Aeronautical Engineer",
                'Mirage 2000 Flight Line - Operational Level Maintenance',
                'Preventive Maintenance Supervisor',
                'Quality Assurance Quality Control Supervisor',
                'Quality Assurance Quality Control Officer',
                'Quality Control Supervisor',
            ],
            heading: "Here are a Few Highlights:",
        },
    };
    const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        ));
    };

    return (
        <div
            className="about-me-container screen-container fade-in"
            id={props.id || ""}
        >
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">
                            {SCREEN_CONSTSANTS.description}
                        </span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                            <button
                                className="btn primary-btn"
                                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                            >
                                {" "}
                                Hire Me{" "}
                            </button>
                            <a href="CV-Europass-20190724.pdf" download="CV-Europass-20190724.pdf">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}