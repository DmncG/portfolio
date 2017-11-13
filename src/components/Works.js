import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Particles from 'react-particles-js'

const Works = props => {
  const srcs = ['FOKq4sL-GlE', 'nRGFzdYnl_c']
  return (
    <div>
      <Navbar/>
      <Particles className='particles-bg' params={{
        particles: {
          line_linked: {
            enable: false
          },
          number: {
            value: 8
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
      }} style={{'minHeight': '100%', width: '100%', position: 'absolute', zIndex: -1}}/>
      {srcs.length &&
        srcs.map((source, i) => {
          return (
            <iframe key={i} id="ytplayer" type="text/html" width="320" height="180"
              src={`https://www.youtube.com/embed/${source}?autoplay=0`}
              frameBorder="0"></iframe>
          )
        })
      }
      <video width="320" height="240" loop="true" autoPlay="true">
        <source src="/assets/clips/source.mp4" type="video/mp4"/>
        Your browser doesn't support the video tag.
      </video>
    </div>
  )
}

export default Works