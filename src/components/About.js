import React from 'react';

import ReactTooltip from 'react-tooltip';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

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

import '../styles/About.css';

const About = () => {
  
    return (            
        <main className='d-flex flex-column text-monospace text-white align-items-center justify-content-center aboutContainer'>
            
            
                <section>
                    <Roll top big cascade>
                    <h1 className='display-4 text-center'>About Me</h1>
                    </Roll>
                    <Fade left>
                    <p className='text-justify font-weight-bold aboutDescription text-monospace '>
                        Hi, my name is Deon Choi. 
                        I graduated from <a className='aboutLink' href='https://www.gwu.edu/' target='_blank' rel="noopener noreferrer">The George Washington University</a> in May 2019 with a Bachelor of Science in Statistics & a Minor in Computer Science. 
                        Shortly after graduation, I decided to dive into the world of web development.
                        <br></br>
                        I enjoy creating minimalistic, responsive applications utilizing the <a className='aboutLink' href='https://www.educative.io/edpresso/what-is-mern-stack' target='_blank' rel="noopener noreferrer">MERN</a> stack.
                        I still have an enormous amount to learn, but I'm incredibly excited to continue down this path into becoming an excellent developer.
                        <br></br>
                        Aside from web development, I enjoy fitness, food, and watching/playing sports. I'm a Lakers, Rams/Chargers, Juventus, and die-hard Dodgers fan.
                    </p>
                    </Fade>
                </section>
            
            <Roll bottom big cascade>
                <section className='d-flex flex-wrap justify-content-between skillIconRow'>
                    <ReactTooltip /><img src={HtmlIcon} alt='HTML' className='skillIcon' data-tip='HTML 5'/>
                    <ReactTooltip /><img src={CssIcon} alt='CSS' className='skillIcon' data-tip='CSS 3'/>
                    <ReactTooltip /><img src={JavaScriptIcon} alt='JavaScript' className='skillIcon' data-tip='JavaScript'/>
                    <ReactTooltip /><img src={jQueryIcon} alt='jQuery' className='skillIcon' data-tip='jQuery'/>
                    <ReactTooltip /><img src={SassIcon} alt='SASS' className='skillIcon' data-tip='SASS'/>
                    <ReactTooltip /><img src={BootstrapIcon} alt='Bootstrap' className='skillIcon' data-tip='Bootstrap 4'/>
                    <ReactTooltip /><img src={ReactIcon} alt='React.js' className='skillIcon' data-tip='React.js'/>
                    <ReactTooltip /><img src={ExpressIcon} alt='Express.js' className='skillIcon' data-tip='Express.js'/>
                    <ReactTooltip /><img src={NodeIcon} alt='Node.js' className='skillIcon' data-tip='Node.js'/>
                    <ReactTooltip /><img src={MongoDbIcon} alt='MongoDB' className='skillIcon' data-tip='MongoDB'/>
                </section>
            </Roll>
        </main>
    );
    
};

export default About;
