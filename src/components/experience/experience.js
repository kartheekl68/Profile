import { useState } from 'react';
import './experience.css';
import SectionHeading from '../section-heading/sectionheading';

function Experience() {
    const [button, toggleButton] = useState('caterpillar');
    const [view, setView] = useState(false);
    function isInViewPort() {
        const ele = document.querySelector('.experience');
        const rect = ele.getBoundingClientRect();
        if (rect.y + 150 - window.innerHeight < 0 && !view) setView(true);
    }
    window.addEventListener('scroll', isInViewPort);
    return (
        <section className="experience">
            <div className="container sm-container">
                <div className="exp-cont">
                    <div className={`flex ${view ? 'elementFadeup' : 'zero-opac'}`}>
                        <SectionHeading heading="Experience" text="Where I've worked" />
                    </div>
                    <div className={`exp-bot flex ${view ? 'elementFadeup-1' : 'zero-opac'}`}>
                        <div className="exp-list flex">
                            <ul>
                                <li><button className={`exp-btn ${button === 'caterpillar' ? "button-active" : null}`} onClick={() => { toggleButton('caterpillar') }}>Caterpillar</button></li>
                                <li><button className={`exp-btn ${button === 'family' ? "button-active" : null}`} onClick={() => { toggleButton('family') }}>Family Pharmacy</button></li>
                                <li><button className={`exp-btn ${button === 'kate' ? "button-active" : null}`} onClick={() => { toggleButton('kate') }}>Kate Technologies</button></li>
                            </ul>
                        </div>
                        <div className="exp-cont-main">
                            <div className={button === 'caterpillar' ? "exp-cont-sec" : "display-none"}>
                                <p className="exp-head">Front End Developer <span className="green">@ Caterpillar Inc.</span></p>
                                <p className="exp-cont-date">March 2020 - November 2020</p>
                                <ul className="exp-cont-list">
                                    <li>
                                        <p>
                                            Involved in developing enterprise application using Angular 8/9, RXJS, and NGRX platform
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Implemented reusable components such as Color Picker, Dropdown Menu, Date Time Picker, Flyout Popup, Tooltip and skeleton loader, etc.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Worked on Translations Services and created POCs for Charts, Skeleton loaders, Kanban Board, and Importing libraries via CDN.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Implemented TDD and Used Jest framework for unit testing. Used Cypress and Test-Cafe for an end to end testing.
                                            </p>
                                    </li>
                                </ul>
                            </div>
                            <div className={button === 'family' ? "exp-cont-sec" : "display-none"}>
                                <p className="exp-head">Software Developer Intern<span className="green">@ Family Pharmacy</span></p>
                                <p className="exp-cont-date">June 2019 - August 2019</p>
                                <ul className="exp-cont-list">
                                    <li>
                                        <p>
                                            Designing and developing full-stack applications across multiple platforms using modern industry-adopted languages and frameworks.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                        Developed an Internal Application GUI using Angular 2+, Bootstrap, HTML5, CSS3 as a part of current project.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Developing REST architecture-based web services to facilitate communication between client and
                                            servers by writing application-level code to interact with APIs.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Involving in intense User Interface (UI) operations and client-side validations.
                                            </p>
                                    </li>
                                </ul>
                            </div>
                            <div className={button === 'kate' ? "exp-cont-sec" : "display-none"}>
                                <p className="exp-head">Web developer <span className="green">@ Kate Technologies</span></p>
                                <p className="exp-cont-date">July 2015 - December 2017</p>
                                <ul className="exp-cont-list">
                                    <li>
                                        <p>
                                            Converting mock-ups into mobile first responsive web pages using HTML, CSS, JavaScript.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Developing REST architectures with HTTP standards, API best practices, web security, authentication,
                                            and building scalable solutions.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Worked on internal dashboard application to keep track of their customers accounts.
                                            </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;