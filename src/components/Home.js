import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Particles from 'react-particles-js'

const Home = props => {
    return (
        <div className="Home-div">
        <Navbar/>
        <Particles className='particles-bg' params={{
            particles: {
                line_linked: {
                    enable: false   
                },
                number: {
                    value: 20
                },
                color: {
                    value: '#ff9900'
                },
                size: {
                    value: 10
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble'
                    }
                }
            }
        }} style={{height: "100vh"}}/>
        <div className="intro">
        
        <p>
            <strong>Hi! My name is Dominic.</strong>
        </p>
        <p>
            <strong> I'm a Fullstack Software Developer.</strong>
        </p>
        </div>
        </div>
      )  
} 

export default Home