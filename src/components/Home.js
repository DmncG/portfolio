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
            enable: true,
            distance: 300,
            color: '#000000',
            opacity: 1,
            width: 1
          },
          number: {
            value: 25
          },
          color: {
            value: '#ff9900'
          },
          size: {
            value: 7.5
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: 'bubble'
            }
          }
        }
      }} style={{'minHeight': '100%', width: '100%', position: 'absolute', zIndex: '-1'}} canvasClassName="particle-canvas"/>
      <div className="intro">
        <p id="home-p1">
          <strong>Hi! My name is Dominic.</strong>
        </p>
        <p id="home-p2">
          <strong> I'm a Fullstack Software Developer.</strong>
        </p>
      </div>
      <div className="logos">
        <a href="https://github.com/DmncG" target="_blank">
          <img className="home-github" src="/assets/images/github_Logo.png" align="right"/>
        </a>
        <a href="https://www.linkedin.com/in/dominic-rb-garcia/" target="_blank">
          <img className="home-linkedin" src="/assets/images/linkedin_Logo.png" align="right"/>
        </a>
      </div>
    </div>
  )
}

export default Home
