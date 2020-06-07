import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import ReactTooltip from 'react-tooltip';

import '../styles/App.css';

import Home from './Home';
import About from './About';
import Work from './Work';

import GithubIcon from '../images/footer/github.png';
import LinkedInIcon from '../images/footer/linkedin.png';
import EmailIcon from '../images/footer/email.png';
import ResumeIcon from '../images/footer/resume.png';

import GithubDarkIcon from '../images/footer/github_dark.png';
import LinkedInDarkIcon from '../images/footer/linkedin_dark.png';
import EmailDarkIcon from '../images/footer/email_dark.png';
import ResumeDarkIcon from '../images/footer/resume_dark.png';


import ResumePDF from '../images/footer/DeonChoiResume.pdf';


const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleNav = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  const openNavStyle = {
    // width: '20rem',
    width: '100%'
  };
  const closeNavStyle = {
    width: '0rem'
  };

  const closeMenu1 = {
    WebkitTransform: 'rotate(-45deg) translate(-6px, 6px)',
    transform: 'rotate(-45deg) translate(-6px, 6px)'
  };
  const closeMenu2 = {
    opacity: '0'
  };
  const closeMenu3 = {
    WebkitTransform: 'rotate(45deg) translate(-6px, -6px)',
    transform: 'rotate(45deg) translate(-6px, -6px)' 
  };

  const toggleDarkMode = () => {
    isDark ? setIsDark(false) : setIsDark(true);
    document.querySelector('body').classList.toggle('darkmode-body');
  }

  return (

    <Router basename={'/#'}>

        <ReactTooltip />
        <Zoom bottom>
        <header className='fixed-top'>
          
            <button className='dark-toggle' id={isDark ? null : 'darkmode-darkModeButton'} onClick={ () => toggleDarkMode()}><i class="far fa-lightbulb" id={isDark ? null : 'lightbulb-darkMode'}></i></button>

            
            <button className='float-right btn menuButton' onClick={toggleNav}>
              <div className='openIcon' id={isDark ? null : 'darkmode-menuIcon' } style={ isOpen ? closeMenu1 : null }></div>
              <div className='openIcon' id={isDark ? null : 'darkmode-menuIcon' } style={ isOpen ? closeMenu2 : null }></div>
              <div className='openIcon' id={isDark ? null : 'darkmode-menuIcon' } style={ isOpen ? closeMenu3 : null }></div>
            </button>
          
        </header>
        </Zoom>

      <nav id={isDark ? null : 'darkmode-Sidenav'} className='sidenav' style={ isOpen ? openNavStyle : closeNavStyle } onClick={toggleNav}>
        <Link to={'/'} onClick={toggleNav}>Home</Link>
        <Link to={'/about'} onClick={toggleNav}>About</Link>
        <Link to={'/work'} onClick={toggleNav}>Work</Link>
      </nav>

      <main>
        <Route exact path={'/'} render={ () => <Home isDark={isDark}/>} />
        <Route exact path={'/about'} render={ () => <About isDark={isDark}/>} />
        <Route exact path={'/work'} render={ () => <Work isDark={isDark}/>} />
      </main>

      <footer className='text-center fixed-bottom font-weight-light text-monospace footer'>
        <div className=''>
          {/* <ReactTooltip /> */}
          <Zoom right cascade>
            <a href='mailto:deon.choi@gmail.com' className='contactButton' data-tip='Email'>
              <img src={isDark ? EmailIcon : EmailDarkIcon} alt='Email Link for Deon Choi' className='contactImage'/>
            </a>
          </Zoom>
          {/* <ReactTooltip /> */}
          <Zoom top cascade>
            <a href='https://github.com/deonchoi' target='_blank' rel='noopener noreferrer' className='contactButton' data-tip='GitHub'>
              <img src={isDark ? GithubIcon : GithubDarkIcon} alt='GitHub page for Deon Choi' className='contactImage'/>
            </a>
          </Zoom>
          {/* <ReactTooltip /> */}
          <Zoom right cascade>
            <a href='https://www.linkedin.com/in/deon-choi-b3019b128/' target='_blank' rel='noopener noreferrer' className='contactButton' data-tip='LinkedIn'>
              <img src={isDark ? LinkedInIcon : LinkedInDarkIcon} alt='LinkedIn page for Deon Choi' className='contactImage'/>
            </a>
          </Zoom>
          {/* <ReactTooltip /> */}
          <Zoom top cascade>
            <a href={ResumePDF} target='_blank' rel='noopener noreferrer' className='contactButton' data-tip='Resume'>
              <img src={isDark ? ResumeIcon : ResumeDarkIcon} alt='Resume for Deon Choi' className='contactImage'/>
            </a>
          </Zoom>
        </div>
      </footer>

    </Router>
  );
}

export default App;
