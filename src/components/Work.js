import React from 'react';
import '../styles/Work.css';

import SnapIcon from '../images/work/Snap.png';
import FlixIcon from '../images/work/Flix.png';
import PhraseHunterIcon from '../images/work/PhraseHunter.png';
import ShrinkifyIcon from '../images/work/Shrinkify.png';
import GitHubIon from '../images/work/githubSmall.png';
import Zoom from 'react-reveal/Zoom';


const Work = () => {
    
    return (
        <main className='d-flex flex-wrap align-items-center align-content-center justify-content-center text-center text-monospace text-white workContainer'>
           <Zoom>

           <figure className='projectCard'>

                <main className='projectInfo'>
                    <a target='_blank' href='https://snapunsplash.herokuapp.com/' rel='noopener noreferrer' className=''>
                        <img src={SnapIcon} alt='Snap Project' className='projectImage'/>
                    </a>
                    <div className='align-items-center justify-content-center d-flex'>
                        <a target='_blank' href='https://github.com/DeonChoi/snap' rel='noopener noreferrer' className=''>
                            <img src={GitHubIon} alt='Github Repository for Delish project' className='githubIcon'/>
                        </a>
                        <figcaption className='projectTitle'>Snap</figcaption>
                    </div>
                </main>

                <section className='techstackRow'>
                    <span className='badge badge-dark techstack'>Node.js</span>
                    <span className='badge badge-dark techstack'>Express.js</span>
                    <span className='badge badge-dark techstack'>React.js</span>
                    <span className='badge badge-dark techstack'>MongoDB</span>
                    <span className='badge badge-dark techstack'>CSS</span>
                    <span className='badge badge-dark techstack'>JWT</span>
                </section>

            </figure>

            <figure className='projectCard'>
                
                <main className='projectInfo'>
                    <a target='_blank' href='https://shrinkurlapp.herokuapp.com/api/' rel='noopener noreferrer' className=''>
                        <img src={ShrinkifyIcon} alt='Shrinkify Project' className='projectImage'/>
                    </a>

                    <div className='align-items-center justify-content-center d-flex'>
                        <a target='_blank' href='https://github.com/DeonChoi/shrinkURL' rel='noopener noreferrer' className=''>
                            <img src={GitHubIon} alt='Github Repository for Shrinkify project' className='githubIcon'/>
                        </a>
                        <figcaption className='projectTitle'>Shrinkify</figcaption>
                    </div>

                </main>

                <section className='techstackRow'>
                    <span className='badge badge-dark techstack'>Node.js</span>
                    <span className='badge badge-dark techstack'>Express.js</span>
                    <span className='badge badge-dark techstack'>React.js</span>
                    <span className='badge badge-dark techstack'>MongoDB</span>
                    <span className='badge badge-dark techstack'>Bootstrap</span>
                    <span className='badge badge-dark techstack'>JWT</span>

                </section>

            </figure>

            <figure className='projectCard'>

                <main className='projectInfo'>
                    <a target='_blank' href='https://deonchoi.github.io/flix-app/' rel='noopener noreferrer' className=''>
                        <img src={FlixIcon} alt='Flix Project' className='projectImage'/>
                    </a>
                    <div className='align-items-center justify-content-center d-flex'>
                        <a target='_blank' href='https://github.com/DeonChoi/flix-app' rel='noopener noreferrer' className=''>
                            <img src={GitHubIon} alt='Github Repository for Flix project' className='githubIcon'/>
                        </a>
                        <figcaption className='projectTitle'>Flix</figcaption>
                    </div>
                </main>

                <section className='techstackRow'>
                    <span className='badge badge-dark techstack'>React.js</span>
                    <span className='badge badge-dark techstack'>Bootstrap</span>
                    <span className='badge badge-dark techstack'>CSS</span>
                </section>
                
            </figure>

            <figure className='projectCard'>
                <main className='projectInfo'>
                    <a target='_blank' href='https://deonchoi.github.io/OOPgameShowApp/' rel='noopener noreferrer' className=''>
                        <img src={PhraseHunterIcon} alt='Phrase Hunter Project' className='projectImage'/>
                    </a>
                    <div className='align-items-center justify-content-center d-flex'>
                        <a target='_blank' href='https://github.com/DeonChoi/OOPgameShowApp' rel='noopener noreferrer' className=''>
                            <img src={GitHubIon} alt='Github Repository for Phrase Hunter project' className='githubIcon'/>
                        </a>
                        <figcaption className='projectTitle'>Phrase Hunter</figcaption>
                    </div>
                </main>    
                
                <section className='techstackRow'>
                    <span className='badge badge-dark techstack'>HTML</span>
                    <span className='badge badge-dark techstack'>CSS</span>
                    <span className='badge badge-dark techstack'>jQuery</span>
                </section>
                
            </figure>
            </Zoom>
        </main>
    );
    
};

export default Work;
