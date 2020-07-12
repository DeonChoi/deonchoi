import React, { useEffect } from 'react';

import ReactTooltip from 'react-tooltip';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

import PythonIcon from '../images/about/python.png';
import HtmlIcon from '../images/about/html.png';
import CssIcon from '../images/about/css.png';
import JavaScriptIcon from '../images/about/javascript.png';
import jQueryIcon from '../images/about/jquery.png';
import SassIcon from '../images/about/sass.png';
import BootstrapIcon from '../images/about/bootstrap.png';
import ReactIcon from '../images/about/react.png';
import ExpressIcon from '../images/about/expressJS.png';
import NodeIcon from '../images/about/nodeJS.png';
import MongoDbIcon from '../images/about/mongoDB-1.png';
import MySQLIcon from '../images/about/mysql.png';

import '../styles/About.css';

const About = (isDark) => {
    
    useEffect( () => {
        if (isDark.isDark === true) {
            document.querySelector('.aboutContainer').id = 'aboutContainer-darkMode'
            document.querySelectorAll('.aboutStrong').forEach( (aboutStrong) => {
                aboutStrong.style.color = 'hsl(205, 100%, 65%)'
            })
            document.querySelector('.aboutDescription').style.fontWeight = '100'
        } else {
            document.querySelector('.aboutContainer').id = 'aboutContainer-lightMode'
            document.querySelectorAll('.aboutStrong').forEach( (aboutStrong) => {
                aboutStrong.style.color = 'firebrick'
            })
            document.querySelector('.aboutDescription').style.fontWeight = '100'
        }
    }, [isDark])


    return (            
        <main className='d-flex flex-column text-monospace align-items-center justify-content-center aboutContainer'>
            
                <section>
                    <Roll top big cascade>
                    <h1 className='display-4 text-center aboutHeader'>About Me</h1>
                    </Roll>
                    <Fade left>
                    <p className='aboutDescription'>
                        Hi, my name is Deon Choi.
                        I was born and raised in the <strong className='aboutStrong'>San Francisco Bay Area</strong> and am now working in <strong className='aboutStrong'>Washington D.C.</strong>
                        <br></br>
                        I graduated from <a className='aboutStrong' href='https://www.gwu.edu/' target='_blank' rel="noopener noreferrer"><strong className='aboutStrong aboutUnderline'>The George Washington University</strong></a> in May 2019 with a Bachelor of Science in <strong className='aboutStrong'>Statistics</strong> & a Minor in <strong className='aboutStrong'>Computer Science</strong>. 
                        <br></br>
                        I utilize the <a className='aboutStrong aboutUnderline' href='https://www.educative.io/edpresso/what-is-mern-stack' target='_blank' rel="noopener noreferrer"><strong className='aboutStrong'>MERN</strong></a> stack to create minimalistic, <strong className='aboutStrong'>responsive</strong>, and <strong className='aboutStrong'>mobile-first</strong> applications.
                        <br></br>
                        I enjoy fitness, nutrition, music, and sports. I'm a Lakers, Chargers, Juventus, and die-hard <strong className='aboutStrong'>Dodgers</strong> fan.
                    </p>
                    </Fade>
                </section>
            
            <Roll bottom big cascade>
                <section className='d-flex flex-wrap justify-content-between skillIconRow'>
                    <ReactTooltip />
                    <img src={PythonIcon} alt='Python' className='skillIcon' data-tip='Python'/>
                    <img src={JavaScriptIcon} alt='JavaScript' className='skillIcon' data-tip='JavaScript'/>
                    <img src={HtmlIcon} alt='HTML' className='skillIcon' data-tip='HTML 5'/>
                    <img src={CssIcon} alt='CSS' className='skillIcon' data-tip='CSS 3'/>
                    <img src={jQueryIcon} alt='jQuery' className='skillIcon' data-tip='jQuery'/>
                    <img src={SassIcon} alt='SASS' className='skillIcon' data-tip='SASS'/>
                    <img src={BootstrapIcon} alt='Bootstrap' className='skillIcon' data-tip='Bootstrap 4'/>
                    <img src={ReactIcon} alt='React.js' className='skillIcon' data-tip='React.js'/>
                    <img src={ExpressIcon} alt='Express.js' className='skillIcon' data-tip='Express.js'/>
                    <img src={NodeIcon} alt='Node.js' className='skillIcon' data-tip='Node.js'/>
                    <img src={MongoDbIcon} alt='MongoDB' className='skillIcon' data-tip='MongoDB'/>
                    <img src={MySQLIcon} alt='MySQL' className='skillIcon' data-tip='MySQL'/>
                </section>
            </Roll>
        </main>
    );
    
};

export default About;
