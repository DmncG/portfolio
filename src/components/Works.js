import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Particles from 'react-particles-js'

const Works = props => {
    return (
        <div>
        <Navbar/>
        <Particles className='particles-bg' params={{
            particles: {
                line_linked: {
                    enable: false   
                },
                number: {
                    value: 40
                },
                color: {
                    value: '#00ace6'
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
        }} style={{height: "100vh"}}/>
        <h1> My Works. ¯\_(ツ)_/¯ </h1>
        </div>
      )  
} 

export default Works