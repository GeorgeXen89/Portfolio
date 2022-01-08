import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    //here we have
    const programmingSkillsDetails = [
        { skill: 'Matlab', ratingPercentage: 70 },
        { skill: 'Excel', ratingPercentage: 90 },
        { skill: 'Python', ratingPercentage: 80 },
        { skill: 'HTMl/CSS', ratingPercentage: 65 },
        { skill: 'JavaScript', ratingPercentage: 60 },
        { skill: 'JavaScript', ratingPercentage: 55 },
    ];

    const projectsDetails = [
        {
            tittle: 'Personal Portofolio Website',
            duration: { fromDate: '2021', toDate: '2022' },
            description: 'A personal Portofolio website to showcase all my details and projects at one place',
            subHeading: 'Technologies Used: React JS'
        },
        {
            tittle: 'Thesis Stergios Paparizos',
            duration: { fromDate: '2019', toDate: '2019' },
            description: 'Creating an application to find the best route to ',
            subHeading: 'Python'
        },
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={'Hellenic Air Force Academy'}
                subHeading={"Bachelor's degree in Science of Aircraft"}
                fromDate={'2007'}
                toDate={'2011'}
            />
            <ResumeHeading
                heading={'National Technical University of Athens'}
                subHeading={"Master’s Degree in Marine Technology and Science"}
                fromDate={'2016'}
                toDate={'2018'}
            />
            <ResumeHeading
                heading={'National Technical University of Athens'}
                subHeading={"Master’s Degree in Computational Mechanis-Stucture sector"}
                fromDate={'2018'}
                toDate={'2020'}
            />
        </div>,

        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={'Hellenic Air Force'}
                    subHeading={"Computational Engineering at Depot Level"}
                    fromDate={'2020'}
                    toDate={'present'}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        Currently working as
                    </span>
                </div>
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Making studies in ......
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Working with 3d printers .......{" "}
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Working with XRF
                    </span>
                    <br />
                </div>
            </div>
        </div>,

        /* PROGRAMMING SKILLS */
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,

        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,

        /* Interests */
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Chess"
                description="Playing in 1st National League of Greece."
            />
            <ResumeHeading
                heading="Basketball"
                description="Playing seventeen years in 4 teams and in ARMY-NATIONAL-TEAM."
            />
            <ResumeHeading
                heading="Traditional Dances"
                description="any years of greek folk dances."
            />
            <ResumeHeading
                heading="BooksLover"
                description="A read at least one book every 15 days."
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={require(`../../assets/Resume/education.svg`).default}
                    alt="B"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div
            className="resume-container screen-container fade-in"
            id={props.id || ""}
        >
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
};

export default Resume;