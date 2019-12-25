import React from 'react';
import '../styles/Home.css';
import Scramble from 'react-scramble';
import Zoom from 'react-reveal/Zoom';

const Home = () => {
    
    return (
        <div className='d-flex flex-column text-monospace align-items-center justify-content-center homeContainer'>
        <Zoom>
            <Scramble
                autoStart
                text='Deon Choi'
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
                className='display-2 homeName'
            />
            <Scramble
                autoStart
                text='Full Stack Developer'
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
                className='display-4 homeDescription'
            />
            <Scramble
                autoStart
                text='San Francisco Bay Area'
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
                className='display-4 homeDescription'
            />
            </Zoom>
        </div>
    );
    
};

export default Home;
