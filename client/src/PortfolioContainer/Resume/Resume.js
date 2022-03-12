import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import { Link } from 'react-router-dom';

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
        { label: "Online Courses", logoSrc: "interests.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Skills", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Programming Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    //here we have
    const SkillsDetails = [
        { skillD: 'Computational Fluid Dynamics (CFD)', ratingPercentage: 95 },
        { skillD: 'Computer-Aided Design (CAD)', ratingPercentage: 90 },
        { skillD: 'Computer-aided engineering (CAE)', ratingPercentage: 88 },
        { skillD: 'Computer-aided manufacturing (CAM)', ratingPercentage: 50 },
        { skillD: 'SolidWorks', ratingPercentage: 90 },
        { skillD: 'ANSYS', ratingPercentage: 70 },
        { skillD: '3D Scanning', ratingPercentage: 90 },
        { skillD: 'Mechanical Engineering', ratingPercentage: 95 },
        { skillD: 'Aircraft Maintenance', ratingPercentage: 90 },
        { skillD: 'Engineering Management', ratingPercentage: 88 },
        { skillD: 'Flight Safety', ratingPercentage: 85 },
        { skillD: '3D Printing', ratingPercentage: 70 },
        { skillD: 'Dimensional Metrology', ratingPercentage: 70 },
    ];

    const programmingSkillsDetails = [
        { skill: 'Python', ratingPercentage: 80 },
        { skill: 'HTMl/CSS', ratingPercentage: 65 },
        { skill: 'JavaScript', ratingPercentage: 60 },
        { skill: 'React with Redux', ratingPercentage: 70 },
        { skill: 'Matlab', ratingPercentage: 70 },
    ];

    const projectsDetails = [
        {
            title: 'Personal Portofolio Website',
            duration: { fromDate: '2021', toDate: '2022' },
            description: 'A personal Portofolio website to showcase all my details and projects at one place',
            subHeading: 'Technologies Used: React JS'
        },
        {
            title: "Stergios Paparizos thesis in master's degree at University of Patras with tittle:'COST-DURATION OPTIMIZATION OF WORKS IN EXPANDED NETWORKS OF TECHNICAL WORKS WITH USE OF LINEAR PROGRAMMING' ",
            duration: { fromDate: '2019', toDate: '2020' },
            description: 'Creating an application to optimization and find the most suitable time-cost combinations for the execution of each project activity for a Civil-Engineering ',
            subHeading: 'Python'
        },
    ];
    /* Education */
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
                subHeading={"Master’s Degree in Computational Mechanics-Stucture sector"}
                fromDate={'2018'}
                toDate={'2020'}
            />
        </div>,

        /*online courses */

        <div className="resume-screen-container" key="Online Courses">
            <a href="https://courses.edx.org/certificates/809425b6dbf440629888384ed25a25f9">
                <ResumeHeading
                    heading={'ENGR2000X: A Hands-on Introduction to Engineering Simulations'}
                    subHeading={"Cornell University, Edex Courses"}
                    fromDate={'October 2019'}
                    toDate={'November 2019'}
                />
            </a>
            <a href="https://www.udemy.com/certificate/UC-b1f69bab-f2db-4d33-9050-32ce7e2bf6b4/">
                <ResumeHeading
                    heading={'2022 Complete Python Bootcamp From Zero to Hero in Python'}
                    subHeading={"Udemy Courses"}
                    fromDate={'August 2021'}
                    toDate={'September 2021'}
                />
            </a>
            <a href="https://www.udemy.com/certificate/UC-b866bc57-58b4-4ac1-86c7-627eae1672c0/">
                <ResumeHeading
                    heading={'The Web Developer Bootcamp 2022'}
                    subHeading={"Udemy Courses"}
                    fromDate={'September 2021'}
                    toDate={'November 2021'}
                />
            </a >
            <a href="https://www.udemy.com/certificate/UC-47d6463b-2a10-41d4-ade4-3f13ac3d9f52/">
                <ResumeHeading
                    heading={'Modern React with Redux'}
                    subHeading={"Udemy Courses, Master React and Redux with React Router, Webpack, and Create-React-App. Includes Hooks! "}
                    fromDate={'November 2021'}
                    toDate={'February 2022'}
                />
            </a >
        </div >,

        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={'Engineering Directorate officer, Department of Aeronautical Applications'}
                    subHeading={"State’s Aircraft Depot"}
                    fromDate={'2020'}
                    toDate={'present'}
                />
                <ResumeHeading
                    heading={'Quality Assurance Quality Control Supervisor'}
                    subHeading={"Maintenance Squadron, Tanagra AB"}
                    fromDate={'2017'}
                    toDate={'2018'}
                />
                <ResumeHeading
                    heading={'Quality Assurance Quality Control Officer'}
                    subHeading={"Maintenance Squadron, Tanagra AB"}
                    fromDate={'2015'}
                    toDate={'2017'}
                />
                <ResumeHeading
                    heading={'Quality Assurance Quality Control Supervisor'}
                    subHeading={"114 Combat Wing, 332 Squadron Tanagra"}
                    fromDate={'2014'}
                    toDate={'2015'}
                />
                <ResumeHeading
                    heading={'Preventive Maintenance Supervisor'}
                    subHeading={"114 Combat Wing, 332 Squadron Tanagra"}
                    fromDate={'2013'}
                    toDate={'2014'}
                />
                <ResumeHeading
                    heading={'APG/Crew Chief Mirage 2000• Flight Line Manager'}
                    subHeading={"114 Combat Wing, 332 Squadron Tanagra"}
                    fromDate={'2012'}
                    toDate={'2013'}
                />
            </div>
        </div>,

        /* SKILLS */
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {SkillsDetails.map((skillD, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skillD.skillD}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skillD.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
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
                heading="Programming"
                description="Every day I learn something new."
            />

            <ResumeHeading
                heading="Chess"
                description="Played in 1st National League of Greece. Μy ELO is around 1780."
            />
            <Link to="/basketball"> <button className="Interests_button_basketball">See my Basketball Career</button></Link>
            <ResumeHeading
                heading="Basketball"
                description="Played for 17 years in 4 diferent teams(highest category:Third National League).Landmark playing for the ARMY-NATIONAL-TEAM."
            />
            <ResumeHeading
                heading="Traditional Dances"
                description="Many years dancing greek folk dances."
            />
            <Link to="/books"> <button className="Interests_button">See my collection of books</button></Link>
            <ResumeHeading
                heading="BookLover"
                description="Ι read at least one book every 15 days."
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
