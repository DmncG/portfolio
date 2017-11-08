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
                    value: 30,
                    
                },
                color: {
                    value: '#ff9900'
                },
                size: {
                    value: 10
                },
                
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble'
                    }
                }
            }
        }} style={{"minHeight": "100%", width: "100%", position: "absolute"}} canvasClassName="particle-canvas"/> 
        <div className="intro">
        
        <p id="home-p1">
            <strong>Hi! My name is Dominic.</strong>
        </p>
        <p id="home-p2">
            <strong> I'm a Fullstack Software Developer.</strong>
        </p>
        </div>
        </div>
      )  
} 

export default Home