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
import DeonChoiResume from '../images/footer/DeonChoiResume.png';
import MenuIcon from '../images/footer/menu.png';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  const openNavStyle = {
    width: '250px'
  };
  const closeNavStyle = {
    width: '0px'
  };

  return (

    <Router basename={'/'}>
        <header className='fixed-top'>
          {/* <div className='float-right'> */}
          <Zoom bottom cascade>
            <img onClick={toggleNav} src={MenuIcon} alt='Menu Icon' className='menuIcon float-right'/>
          </Zoom>
          {/* </div> */}
        </header>

      <div id='mySidenav' className='sidenav' style={ isOpen ? openNavStyle : closeNavStyle }>
        {/* <a href='javascript:void(0)' className='closeButton' onClick={toggleNav}>&times;</a> */}
        <Link to={'/'} onClick={toggleNav}>Home</Link>
        <Link to={'/about'} onClick={toggleNav}>About</Link>
        <Link to={'/work'} onClick={toggleNav}>Work</Link>
      </div>

      <main>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
      </main>

      <footer className='text-center fixed-bottom font-weight-light text-monospace'>
        <div className=''>
          <Zoom right cascade>
            <a href='mailto:deon.choi@gmail.com' className='contactButton'>
              <img src={EmailIcon} alt='Email Icon' className='contactImage'/>
            </a>
          </Zoom>
          <Zoom top cascade>
            <a href='https://github.com/deonchoi' target='_blank' rel='noopener noreferrer' className='contactButton'>
              <img src={GithubIcon} alt='Github Icon' className='contactImage'/>
            </a>
          </Zoom>
          <Zoom right cascade>
            <a href='https://www.linkedin.com/in/deon-choi-b3019b128/' target='_blank' rel='noopener noreferrer' className='contactButton'>
              <img src={LinkedInIcon} alt='LinkedIn Icon' className='contactImage'/>
            </a>
          </Zoom>
          <Zoom top cascade>
            <a href={DeonChoiResume} target='_blank' rel='noopener noreferrer' className='contactButton'>
              <img src={ResumeIcon} alt='Resume Icon' className='contactImage'/>
            </a>
          </Zoom>
        </div>
      </footer>

    </Router>
  );
}

export default App;
