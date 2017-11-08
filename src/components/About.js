import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Particles from 'react-particles-js'

const About = props => {
    return (
        <div>
        <Navbar/>
        <Particles className='particles-bg' params={{
            particles: {
                line_linked: {
                    enable: false   
                },
                number: {
                    value: 30
                },
                color: {
                    value: '#e62e00'
                },
                size: {
                    value: 10
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: false,
                        mode: 'repulse'
                    }
                }
            }
        }} style={{"minHeight": "100%", width: "100%", position: "absolute", zIndex: -1}} canvasClassName="particle-canvas"/>
        <p className="about-header">
            About Me 
        </p>
        <img className="about-profile" src="../../assets/images/about_profile.jpg"/>
        <p className="about-paragraph">
          <strong>
              I am a recent graduate of Fullstack Academy's<br></br>
              Software Engineering Immersive where I learned<br></br> 
              how to build various applications.
          </strong>  
        </p>
        <p className="about-paragraph">
          <strong>
              I am drawn toward good storytelling<br></br>
              and captivating visuals. 
          </strong>  
        </p>
        
        </div>
      )  
} 

export default About