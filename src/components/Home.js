import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Particles from 'react-particles-js'

const Home = props => {
    return (
        <div>
        <Navbar/>
        <Particles className='particles-bg' params={{
            particles: {
                line_linked: {
                    enable: false   
                },
                number: {
                    value: 80
                },
                color: {
                    value: '#ff9900'
                },
                size: {
                    value: 5
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    }
                }
            }
        }} style={{height: '100vh'}}/>
        <h1>Home. ¯\_(ツ)_/¯ </h1>
        <h2 className="intro">Hi. My name is Dominic and I am a Fullstack Software Engineer.</h2>
        </div>
      )  
} 

export default Home