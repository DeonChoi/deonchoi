import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

import '../styles/App.css';

import Home from './Home';
import About from './About';
import Work from './Work';

import GithubIcon from '../images/footer/github.png';
import LinkedInIcon from '../images/footer/linkedin.png';
import EmailIcon from '../images/footer/email.png';
import ResumeIcon from '../images/footer/resume.png';
import MenuIcon from '../images/footer/menu.png';
import ResumePDF from '../images/footer/DeonChoiResume.pdf';


const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  const openNavStyle = {
    width: '18rem'
  };
  const closeNavStyle = {
    width: '0rem'
  };

  return (

    <Router basename={'/#'}>
        <header className='fixed-top'>
          <Zoom bottom cascade>
            <button className='float-right btn menuButton' onClick={toggleNav} >
              <img src={MenuIcon} alt='Menu Navigation' className='menuIcon'/>
            </button>
          </Zoom>
        </header>

      <nav id='mySidenav' className='sidenav' style={ isOpen ? openNavStyle : closeNavStyle }>
        <Link to={'/'} onClick={toggleNav}>Home</Link>
        <Link to={'/about'} onClick={toggleNav}>About</Link>
        <Link to={'/work'} onClick={toggleNav}>Work</Link>
      </nav>

      <main>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
      </main>

      <footer className='text-center fixed-bottom font-weight-light text-monospace footer'>
        <div className=''>
          <Zoom right cascade>
            <a href='mailto:deon.choi@gmail.com' className='contactButton'>
              <img src={EmailIcon} alt='Email Link for Deon Choi' className='contactImage'/>
            </a>
          </Zoom>
          <Zoom top cascade>
            <a href='https://github.com/deonchoi' target='_blank' rel='noopener noreferrer' className='contactButton'>
              <img src={GithubIcon} alt='GitHub page for Deon Choi' className='contactImage'/>
            </a>
          </Zoom>
          <Zoom right cascade>
            <a href='https://www.linkedin.com/in/deon-choi-b3019b128/' target='_blank' rel='noopener noreferrer' className='contactButton'>
              <img src={LinkedInIcon} alt='LinkedIn page for Deon Choi' className='contactImage'/>
            </a>
          </Zoom>
          <Zoom top cascade>
            <a href={ResumePDF} target='_blank' rel='noopener noreferrer' className='contactButton'>
              <img src={ResumeIcon} alt='Resume for Deon Choi' className='contactImage'/>
            </a>
          </Zoom>
        </div>
      </footer>

    </Router>
  );
}

export default App;
