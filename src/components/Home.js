import React from 'react';
import '../styles/Home.css';
import Scramble from 'react-scramble';
import Zoom from 'react-reveal/Zoom';

const Home = () => {
    
    return (
        <div className='d-flex flex-column text-monospace align-items-center justify-content-center homeContainer'>
        <Zoom>
            <Scramble autoStart text='Deon Choi' className='display-2 homeName'
                steps={[
                {
                    roll: 25,
                    action: '+',
                    type: 'all',
                },
                {
                    action: '-',
                    type: 'forward',
                },
                ]}
            />
            <Scramble autoStart text='Full Stack Developer' className='display-4 homeDescription'
                steps={[
                {
                    roll: 20,
                    action: '+',
                    type: 'all',
                },
                {
                    action: '-',
                    type: 'forward',
                },
                ]}
            />
            <Scramble autoStart text='San Francisco Bay Area' className='display-4 homeDescription'
                steps={[
                {
                roll: 20,
                    action: '+',
                    type: 'all',
                },
                {
                    action: '-',
                    type: 'forward',
                },
                ]}
            />
            </Zoom>
        </div>
    );
    
};

export default Home;
