import React from 'react';
import '../styles/Work.css';

import DelishIcon from '../images/work/Delish.png';
import FlixIcon from '../images/work/Flix.png';
import PhraseHunterIcon from '../images/work/PhraseHunter.png';
import ShrinkifyIcon from '../images/work/Shrinkify.png';
import GitHubIon from '../images/work/githubSmall.png';
import LiveDemoIcon from '../images/work/liveDemo.png';
import Zoom from 'react-reveal/Zoom';


const Work = () => {
    
    return (
        <div className='d-flex flex-wrap align-items-center align-content-center justify-content-center text-center text-monospace text-white workContainer'>
           <Zoom>
            <div className='projectCard'>
                <a target='_blank' href='https://shrinkurlapp.herokuapp.com/api/' rel='noopener noreferrer' className=''>
                    <img src={ShrinkifyIcon} alt='Shrinkify Project' className='projectImage'/>
                </a>
                <div className='align-items-center justify-content-center d-flex'>
                    <a target='_blank' href='https://github.com/DeonChoi/shrinkURL' rel='noopener noreferrer' className=''>
                        <img src={GitHubIon} alt='Github Repository' className='githubIcon'/>
                    </a>
                    <span className='projectTitle'>Shrinkify</span>
                </div>
                
                <div className='techstackRow'>
                    <span className='badge badge-dark techstack'>Node.js</span>
                    <span className='badge badge-dark techstack'>Express.js</span>
                    <span className='badge badge-dark techstack'>React.js</span>
                    <span className='badge badge-dark techstack'>MongoDB</span>
                    <span className='badge badge-dark techstack'>Bootstrap</span>
                </div>
                
            </div>

            <div className='projectCard'>
                <a target='_blank' href='https://deonchoi.github.io/flix-app/' rel='noopener noreferrer' className=''>
                    <img src={FlixIcon} alt='Shrinkify Project' className='projectImage'/>
                </a>
                <div className='align-items-center justify-content-center d-flex'>
                    <a target='_blank' href='https://github.com/DeonChoi/flix-app' rel='noopener noreferrer' className=''>
                        <img src={GitHubIon} alt='Github Repository' className='githubIcon'/>
                    </a>
                    <span className='projectTitle'>Flix</span>
                </div>
                
                <div className='techstackRow'>
                    <span className='badge badge-dark techstack'>React.js</span>
                    <span className='badge badge-dark techstack'>Bootstrap</span>
                    <span className='badge badge-dark techstack'>CSS</span>
                </div>
                
            </div>

            <div className='projectCard'>
                <a target='_blank' href='https://deonchoi.github.io/recipe-app/' rel='noopener noreferrer' className=''>
                    <img src={DelishIcon} alt='Shrinkify Project' className='projectImage'/>
                </a>
                <div className='align-items-center justify-content-center d-flex'>
                    <a target='_blank' href='https://github.com/DeonChoi/recipe-app' rel='noopener noreferrer' className=''>
                        <img src={GitHubIon} alt='Github Repository' className='githubIcon'/>
                    </a>
                    <span className='projectTitle'>Delish</span>
                </div>
                
                <div className='techstackRow'>
                <span className='badge badge-dark techstack'>React.js</span>
                    <span className='badge badge-dark techstack'>Bootstrap</span>
                    <span className='badge badge-dark techstack'>CSS</span>
                </div>
                
            </div>

            <div className='projectCard'>
                <a target='_blank' href='https://deonchoi.github.io/OOPgameShowApp/' rel='noopener noreferrer' className=''>
                    <img src={PhraseHunterIcon} alt='Shrinkify Project' className='projectImage'/>
                </a>
                <div className='align-items-center justify-content-center d-flex'>
                    <a target='_blank' href='https://github.com/DeonChoi/OOPgameShowApp' rel='noopener noreferrer' className=''>
                        <img src={GitHubIon} alt='Github Repository' className='githubIcon'/>
                    </a>
                    <span className='projectTitle'>Phrase Hunter</span>
                </div>
                
                <div className='techstackRow'>
                    <span className='badge badge-dark techstack'>HTML</span>
                    <span className='badge badge-dark techstack'>CSS</span>
                    <span className='badge badge-dark techstack'>jQuery</span>
                </div>
                
            </div>
            </Zoom>
        </div>
    );
    
};

export default Work;
