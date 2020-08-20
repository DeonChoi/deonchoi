import React, { useContext } from 'react';
import '../styles/Home.css';
import Scramble from 'react-scramble';
import Zoom from 'react-reveal/Zoom';
import {Context} from './Context'


const Home = () => {
    
    const {isDark} = useContext(Context)

    return (
        
        <main className='d-flex flex-column text-monospace align-items-center justify-content-center homeContainer' id={isDark ? 'homeContainer-lightMode' : 'homeContainer-darkMode'}>
        <Zoom>
            <h1 className='homeName-container'>
                <Scramble autoStart text='Deon Choi' className='display-2 homeName'
                    steps={[
                    {
                        roll: 30,
                        action: '+',
                        type: 'all',
                    },
                    {
                        action: '-',
                        type: 'forward',
                    },
                    ]}
                />
            </h1>
            
            <h2>
                <Scramble autoStart text='Full Stack Developer' className='display-4 homeDescription'
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
            </h2>
            
            <h2>
                <Scramble autoStart text='District of Columbia' className='display-4 homeDescription'
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
            </h2>
            </Zoom>
        </main>
    );
    
};

export default Home;
