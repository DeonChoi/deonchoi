import React, { useEffect } from 'react';
import '../styles/Work.css';

import SnapIcon from '../images/work/Snap.png';
import FlixIcon from '../images/work/Flix.png';
import PhraseHunterIcon from '../images/work/PhraseHunter.png';
import ShrinkifyIcon from '../images/work/Shrinkify.png';
import GitHubIcon from '../images/work/githubSmall.png';
import GitHubDarkIcon from '../images/work/githubSmallDark.png';
import Zoom from 'react-reveal/Zoom';

import ReactTooltip from 'react-tooltip';


const Work = (isDark) => {
    useEffect( () => {
        if (isDark.isDark === true) {
            document.querySelector('.workContainer').id = 'workContainer-darkMode'
            document.querySelectorAll('.techstack').forEach( (badge) => {
                badge.classList = 'badge badge-dark techstack techstackDark'
            })
            document.querySelectorAll('.githubIcon').forEach( (projectImage) => {
                projectImage.src = GitHubIcon
            })
            document.querySelectorAll('.projectImage').forEach( (projectImage) => {
                projectImage.style.boxShadow = '0 0 15px white';
            })
        } else {
            document.querySelector('.workContainer').id = 'workContainer-lightMode'
            document.querySelectorAll('.techstack').forEach( (badge) => {
                badge.classList = 'badge badge-light techstack techstackLight'
            })
            document.querySelectorAll('.githubIcon').forEach( (projectImage) => {
                projectImage.src = GitHubDarkIcon
            })
            document.querySelectorAll('.projectImage').forEach( (projectImage) => {
                projectImage.style.boxShadow = '0 0 15px black';
            })
        }
    }, [isDark])

    return (
        
        <main className='d-flex flex-wrap align-items-center align-content-center justify-content-center text-center text-monospace workContainer'>
           <ReactTooltip />
           <Zoom>
           
           <figure className='projectCard'>

                <main className='projectInfo'>
                    
                    <a target='_blank' href='https://flix-movies-app.herokuapp.com/' rel='noopener noreferrer' className='' data-tip="Search for movies by keyword. If you create an account and login, you're able to save the movies to your own watchlist.">
                        <img src={FlixIcon} alt='Flix Project' className='projectImage'/>
                    </a>
                    <div className='align-items-center justify-content-center d-flex'>
                       
                        <a target='_blank' href='https://github.com/DeonChoi/flix-app' rel='noopener noreferrer' className='' data-tip="GitHub Repository">
                            <img src={GitHubIcon} alt='Github Repository for Flix project' className='githubIcon'/>
                        </a>
                        <figcaption className='projectTitle'>Flix</figcaption>
                    </div>
                </main>

                <section className='techstackRow'>
                    <span className='badge techstack'>Node.js</span>
                    <span className='badge techstack'>Express.js</span>
                    <span className='badge techstack'>React.js</span>
                    <span className='badge techstack'>MySQL</span>
                    <span className='badge techstack'>Bootstrap</span>
                    <span className='badge techstack'>JWT</span>
                </section>

            </figure>

           <figure className='projectCard'>

                <main className='projectInfo'>
                    <a target='_blank' href='https://snapunsplash.herokuapp.com/' rel='noopener noreferrer' className='' data-tip="Search for images by keyword. If you create an account and login, you're able to save the images to your own collection.">
                        <img src={SnapIcon} alt='Snap Project' className='projectImage'/>
                    </a>
                    <div className='align-items-center justify-content-center d-flex'>
                        <a target='_blank' href='https://github.com/DeonChoi/snap' rel='noopener noreferrer' className='' data-tip="GitHub Repository">
                            <img src={GitHubIcon} alt='Github Repository for Delish project' className='githubIcon'/>
                        </a>
                        <figcaption className='projectTitle'>Snap</figcaption>
                    </div>
                </main>

                <section className='techstackRow'>
                    <span className='badge techstack'>Node.js</span>
                    <span className='badge techstack'>Express.js</span>
                    <span className='badge techstack'>React.js</span>
                    <span className='badge techstack'>MongoDB</span>
                    <span className='badge techstack'>CSS</span>
                    <span className='badge techstack'>JWT</span>
                </section>

            </figure>

            <figure className='projectCard'>
                
                <main className='projectInfo'>
                    <a target='_blank' href='https://shrinkurlapp.herokuapp.com/api/' rel='noopener noreferrer' className='' data-tip="Create shortened URLs by creating an account and logging in. Your shortened URLs wil be saved to your user profile.">
                        <img src={ShrinkifyIcon} alt='Shrinkify Project' className='projectImage'/>
                    </a>

                    <div className='align-items-center justify-content-center d-flex'>
                        <a target='_blank' href='https://github.com/DeonChoi/shrinkURL' rel='noopener noreferrer' className='' data-tip="GitHub Repository">
                            <img src={GitHubIcon} alt='Github Repository for Shrinkify project' className='githubIcon'/>
                        </a>
                        <figcaption className='projectTitle'>Shrinkify</figcaption>
                    </div>

                </main>

                <section className='techstackRow'>
                    <span className='badge techstack'>Node.js</span>
                    <span className='badge techstack'>Express.js</span>
                    <span className='badge techstack'>React.js</span>
                    <span className='badge techstack'>MongoDB</span>
                    <span className='badge techstack'>Bootstrap</span>
                    <span className='badge techstack'>JWT</span>

                </section>

            </figure>

            <figure className='projectCard'>
                <main className='projectInfo'>
                    <a target='_blank' href='https://deonchoi.github.io/OOPgameShowApp/' rel='noopener noreferrer' className='' data-tip="A guessing game. A random phrase is chosen, and you have 5 lives to correctly guess the letters in the phrase.">
                        <img src={PhraseHunterIcon} alt='Phrase Hunter Project' className='projectImage'/>
                    </a>
                    <div className='align-items-center justify-content-center d-flex'>
                            <a target='_blank' href='https://github.com/DeonChoi/OOPgameShowApp' rel='noopener noreferrer' className='' data-tip="GitHub Repository">
                            <img src={GitHubIcon} alt='Github Repository for Phrase Hunter project' className='githubIcon'/>
                        </a>
                        <figcaption className='projectTitle'>Phrase Hunter</figcaption>
                    </div>
                </main>    
                
                <section className='techstackRow'>
                    <span className='badge techstack'>HTML</span>
                    <span className='badge techstack'>CSS</span>
                    <span className='badge techstack'>jQuery</span>
                </section>
                
            </figure>
            
            </Zoom>
        </main>
    );
    
};

export default Work;
