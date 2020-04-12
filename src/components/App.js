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
// import MenuIcon from '../images/footer/menu.png';
import ResumePDF from '../images/footer/DeonChoiResume.pdf';


const App = () => {

  const [isOpen, setIsOpen] = useState(false);

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
    WebkitTransform: 'rotate(-45deg) translate(-9px, 6px)',
    transform: 'rotate(-45deg) translate(-9px, 6px)'
  };
  const closeMenu2 = {
    opacity: '0'
  };
  const closeMenu3 = {
    WebkitTransform: 'rotate(45deg) translate(-8px, -8px)',
    transform: 'rotate(45deg) translate(-8px, -8px)' 
  };

  return (

    <Router basename={'/#'}>

        <ReactTooltip />
        <header className='fixed-top'>
          {/* <Zoom bottom cascade> */}
            <button className='float-right btn menuButton' onClick={toggleNav} >
              {/* <img src={MenuIcon} alt='Menu Navigation' className='menuIcon'/> */}
              <div className='openIcon' style={ isOpen ? closeMenu1 : null }></div>
              <div className='openIcon' style={ isOpen ? closeMenu2 : null }></div>
              <div className='openIcon' style={ isOpen ? closeMenu3 : null }></div>
            </button>
          {/* </Zoom> */}
        </header>

      <nav id='mySidenav' className='sidenav' style={ isOpen ? openNavStyle : closeNavStyle }>
        <Link to={'/'} onClick={toggleNav}>Home</Link>
        <Link to={'/about'} onClick={toggleNav}>About</Link>
        <Link to={'/work'} onClick={toggleNav}>Work</Link>
        <Link onClick={toggleNav}>X</Link>
      </nav>

      <main>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
      </main>

      <footer className='text-center fixed-bottom font-weight-light text-monospace footer'>
        <div className=''>
          {/* <ReactTooltip /> */}
          <Zoom right cascade>
            <a href='mailto:deon.choi@gmail.com' className='contactButton' data-tip='Email'>
              <img src={EmailIcon} alt='Email Link for Deon Choi' className='contactImage'/>
            </a>
          </Zoom>
          {/* <ReactTooltip /> */}
          <Zoom top cascade>
            <a href='https://github.com/deonchoi' target='_blank' rel='noopener noreferrer' className='contactButton' data-tip='GitHub'>
              <img src={GithubIcon} alt='GitHub page for Deon Choi' className='contactImage'/>
            </a>
          </Zoom>
          {/* <ReactTooltip /> */}
          <Zoom right cascade>
            <a href='https://www.linkedin.com/in/deon-choi-b3019b128/' target='_blank' rel='noopener noreferrer' className='contactButton' data-tip='LinkedIn'>
              <img src={LinkedInIcon} alt='LinkedIn page for Deon Choi' className='contactImage'/>
            </a>
          </Zoom>
          {/* <ReactTooltip /> */}
          <Zoom top cascade>
            <a href={ResumePDF} target='_blank' rel='noopener noreferrer' className='contactButton' data-tip='Resume'>
              <img src={ResumeIcon} alt='Resume for Deon Choi' className='contactImage'/>
            </a>
          </Zoom>
        </div>
      </footer>

    </Router>
  );
}

export default App;
