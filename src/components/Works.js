import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Particles from 'react-particles-js'
import {Grid, Col, Row, Collapse, Well} from 'react-bootstrap'

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
            value: '#000000'
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
      }} style={{'minHeight': '100%', width: '100%', position: 'fixed', zIndex: -1}}/>
      <div className="works-content">
        {srcs.length &&
            srcs.map((source, i) => {
              return (
                <iframe key={i} id="ytplayer" type="text/html" width="320" height="180"
                  src={`https://www.youtube.com/embed/${source}?autoplay=0`}
                  frameBorder="0"></iframe>
              )
            })
        }
        <Grid>
          <Row>
            <Col xs={12} md={1} lg={1} className="works-col-header">
              <p className="works-header">
                Works
              </p>
              <div className="works-header-dash">
              </div>
            </Col>
            <Col xs={12} md={10} lg={10} className="works-col-content">
              <div className="works-saffire">
                <div className="works-saffire-box">
                  <a href="https://github.com/CapstoneFabolous/Travel-App" target="_blank">
                    <img className="works-saffire-screenshot" src="/assets/images/saffire_Screenshot.png"/>
                  </a>
                </div>
                <div className="works-saffire-header">
                  <p>
                      Saffire
                  </p>
                </div>
              </div>
              <div className="works-meeseeks">
                <div className="works-meeseeks-box">
                  <a href="https://github.com/DmncG/stackathon_phaser" target="_blank">
                    <video className="works-meeseeks-gif" width="600" height="auto" loop="true" autoPlay="true">
                      <source src="/assets/clips/source.mp4" type="video/mp4"/>
                      Your browser doesn't support the video tag.
                    </video>
                  </a>
                </div>
                <div className="works-meeseeks-header">
                  <p>
                    Meeseeks <br/>&Destroy
                  </p>
                </div>
              </div>
              <div className="works-threejs">
                <div className="works-threejs-box">
                  <p className="works-threejs-logo">
                  three.js
                  </p>
                </div>
                <div className="works-threejs-header">
                  <p>
                      Three.js Talk
                  </p>
                </div>
              </div>
              <br/>
              <br/>
            </Col>
            <Col xs={12} md={1} lg={1} className="works-col-header">
              <div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  )
}

export default Works
