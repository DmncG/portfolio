import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Particles from 'react-particles-js'
import {Grid, Col, Row, Fade} from 'react-bootstrap'

class About extends Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount (e) {
    this.setState({fadeIn: !this.state.fadeIn})
  }

  render () {
    return (
        <div>
          <Navbar/>
          <Particles className='particles-bg' params={{
            particles: {
              line_linked: {
                enable: true
              },
              number: {
                value: 5
              },
              color: {
                value: '#000000'
              },
              size: {
                value: 7.5
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
          }} style={{'minHeight': '100%', 'height': 'auto', width: '100%', position: 'absolute', zIndex: -1}} canvasClassName="particle-canvas"/>
          <Grid>
            <Row>
              <Col xs={12} md={7} lg={7} className="about-col-profile">
                <img className="about-profile" src="../../assets/images/about_profile.jpg"/>
              </Col>
              <Col xs={12} md={5} lg={5} className="about-col-content">
                <div id="about-content">
                  <p className="about-header">
                About Me
                  </p>
                  <p className="about-p1">
                    <strong>
                        I am a recent graduate of Fullstack Academy's
                        Software Engineering Immersive where I learned
                        how to build various applications.
                    </strong>
                  </p>
                  <p className="about-p1">
                    <strong>
                        I worked in a non-profit organization for the past six years
                        until a few friends of mine introduced me to
                        software development--a world where I could express my
                        imagination and creativity in interesting and meaningful ways.
                    </strong>
                  </p>
                  <p id="about-p2">
                    <strong>
                        Asides from writing code, I also err... write! I love conjuring stories: 
                        preferably something that involves mazes, gods, monsters and
                        everything in between.
                    </strong>
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
    )
  }
}

export default About
