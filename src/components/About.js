import React, { useContext } from 'react';

import ReactTooltip from 'react-tooltip';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

import PythonIcon from '../images/about/python.png';
import DjangoIcon from '../images/about/django.png';
import JavaIcon from '../images/about/java.png';
import JavaScriptIcon from '../images/about/javascript_alternate.png';
import HtmlIcon from '../images/about/html.png';
import CssIcon from '../images/about/css.png';
import jQueryIcon from '../images/about/jquery.png';
import SassIcon from '../images/about/sass.png';
import BootstrapIcon from '../images/about/bootstrap.png';
import ReactIcon from '../images/about/react.png';
import ExpressIcon from '../images/about/expressJS.png';
import NodeIcon from '../images/about/nodeJS.png';
import MongoDbIcon from '../images/about/mongoDB-1.png';
import MySQLIcon from '../images/about/mysql.png';

import '../styles/About.css';

import {Context} from './Context'


const About = () => {
    
    const {isDark} = useContext(Context)

    return (            
        <main className='d-flex flex-column text-monospace align-items-center justify-content-center aboutContainer' id={isDark ? 'aboutContainer-darkMode' : 'aboutContainer-lightMode'}>
            
                <section>
                    <Roll top big cascade>
                    <h1 className='display-4 text-center aboutHeader'>About Me</h1>
                    </Roll>
                    <Fade left>
                    <p className='aboutDescription'>
                        Hi, my name is Deon Choi.
                        I was born and raised in the <strong className='aboutStrong' style={isDark ? {color:'hsl(205, 100%, 65%)'} : {color:'royalblue'}}>San Francisco Bay Area</strong> and am now working in <strong className='aboutStrong' style={isDark ? {color:'hsl(205, 100%, 65%)'} : {color:'royalblue'}}>Washington D.C.</strong>
                        <br></br>
                        I graduated from <a className='aboutStrong' href='https://www.gwu.edu/' target='_blank' rel="noopener noreferrer" style={isDark ? {color:'hsl(205, 100%, 65%)'} : {color:'royalblue'}}><strong className='aboutStrong aboutUnderline' style={isDark ? {color:'hsl(205, 100%, 65%)'} : {color:'royalblue'}}>The George Washington University</strong></a> in May 2019 with a Bachelor of Science in <strong className='aboutStrong' style={isDark ? {color:'hsl(205, 100%, 65%)'} : {color:'royalblue'}}>Statistics</strong> & a Minor in <strong className='aboutStrong' style={isDark ? {color:'hsl(205, 100%, 65%)'} : {color:'royalblue'}}>Computer Science</strong>. 
                        <br></br>
                        I utilize the <a className='aboutStrong aboutUnderline' href='https://www.educative.io/edpresso/what-is-mern-stack' target='_blank' rel="noopener noreferrer" style={isDark ? {color:'hsl(205, 100%, 65%)'} : {color:'royalblue'}}><strong className='aboutStrong' style={isDark ? {color:'hsl(205, 100%, 65%)'} : {color:'royalblue'}}>MERN</strong></a> stack to create minimalistic, <strong className='aboutStrong' style={isDark ? {color:'hsl(205, 100%, 65%)'} : {color:'royalblue'}}>responsive</strong>, and <strong className='aboutStrong' style={isDark ? {color:'hsl(205, 100%, 65%)'} : {color:'royalblue'}}>mobile-first</strong> applications.
                        <br></br>
                        I'm a Lakers, Chargers, <strong style={isDark ? {color:'hsl(205, 100%, 65%)'} : {color:'royalblue'}} data-tip="I'm really undecided">Chelsea/Tottenham/PSG</strong>, and die-hard <strong className='aboutStrong' style={isDark ? {color:'hsl(205, 100%, 65%)'} : {color:'royalblue'}}>Dodgers</strong> fan.
                    </p>
                    </Fade>
                </section>
            
            <Roll bottom big cascade>
                <section className='d-flex flex-wrap justify-content-between skillIconRow'>
                    <ReactTooltip />
                    {/* <img src={JavaIcon} alt='Java' className='skillIcon' data-tip='Java'/> */}
                    <img src={PythonIcon} alt='Python' className='skillIcon' data-tip='Python'/>
                    <img src={JavaScriptIcon} alt='JavaScript' className='skillIcon' data-tip='JavaScript'/>
                    <img src={HtmlIcon} alt='HTML' className='skillIcon' data-tip='HTML'/>
                    <img src={CssIcon} alt='CSS' className='skillIcon' data-tip='CSS'/>
                    <img src={jQueryIcon} alt='jQuery' className='skillIcon hideIcon' data-tip='jQuery'/>
                    {/* <img src={SassIcon} alt='SASS' className='skillIcon hideIcon' data-tip='SASS'/> */}
                    <img src={BootstrapIcon} alt='Bootstrap' className='skillIcon hideIcon' data-tip='Bootstrap'/>
                    <img src={DjangoIcon} alt='Django' className='skillIcon' data-tip='Django'/>
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
