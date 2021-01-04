import './work.css';
import SectionHeading from '../section-heading/sectionheading';
import Gig from '../gig/gig';
import { useState } from 'react';

function Work() {
    const mywork = [
       
        {
            index: 0,
            heading: 'Personal Portfolio Website - Vesion 1',
            text: 'A Static HTML page to showcase my skills and expertise. Built with pure HTML, CSS, Canvas, & JavaScript. I have used the power of PWA and built this web app work offline.',
            tools: ['HTML', 'CSS', 'Javascript', 'PWA'],
            link: 'https://bhargavkuchipudi.herokuapp.com/',
            repo: 'https://github.com/bhargavkuchipudi0/portfolio-0286',
            type: 'personal'
        },
        {
            index: 1,
            heading: 'Personal Portfolio Website - Vesion 2',
            text: 'Designed and developed using Figma and React. Even though it is a static site, building this portfolio with react makes it more flexible, simple, and organised.',
            tools: ['React', 'HTML', 'CSS', 'Figma'],
            link: 'https://bhargavkuchipudi.netlify.app/',
            repo: 'https://github.com/bhargavkuchipudi0/portfolio-2',
            type: 'personal'
        },
        {
            index: 2,
            heading: 'Accu-Weather | Weather App',
            text: 'Yet another weather app with Vue.js. With this application, you can look up the weather around the world by city name. It is a simple and minimalistic app built to get my self started with a new framework (Vue.js)',
            tools: ['Vue.js', 'Chart.js', 'JavaScript', 'HTML', 'CSS'],
            link: 'https://accu-weather.netlify.app/',
            repo: 'https://github.com/bhargavkuchipudi0/vue-weather-app',
            type: 'personal'
        },
        {
            index: 3,
            heading: 'Fast News Now',
            text: 'This is a front end application built with React JS using Newsapi.org developer api. I have integrated the filter module to search betweeen different categories and sources (CNN, BBC NEws, ESPN, The Hindu, etc..,).',
            tools: ['React', 'Newsapi', 'HTML', 'CSS'],
            link: null,
            repo: 'https://github.com/bhargavkuchipudi0/fastnewsnow',
            type: 'personal'
        },
        
        
    ]
    const [view, setView] = useState(false);
    function isInViewPort() {
        const ele = document.querySelector('.work');
        const rect = ele.getBoundingClientRect();
        if (rect.y + 150 - window.innerHeight < 0 && !view) setView(true);
    }
    window.addEventListener('scroll', isInViewPort);
    return (
        <section className="work">
            <div className="container sm-container">
                <div className="work-top">
                    <div className={`work-head flex ${view ? 'elementFadeup': 'zero-opac'}`}>
                        <SectionHeading heading="My Work" text="Some things I've built"/>
                    </div>
                    <div className="work-cont">
                        {
                            mywork.map((work, index) => {
                                return <Gig key={index} work={work}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;