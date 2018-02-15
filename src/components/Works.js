import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Particles from 'react-particles-js'
import {Grid, Col, Row, Collapse, Well, Fade} from 'react-bootstrap'
import $ from 'jquery'
import Waypoint from 'react-waypoint'

class Works extends Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount (e) {
    this.setState({fadeIn: !this.state.fadeIn})
  }

  componentWillUnmount (e) {
    //  when project is clicked, box will expand to to fit viewport then go to singleProject
  }

  render () {
    const srcs = ['FOKq4sL-GlE', 'nRGFzdYnl_c']
    //  scroll animation for projects

    return (
      
        <div>
          <Navbar/>
          <Particles className='particles-bg' params={{
            particles: {
              line_linked: {
                enable: false
              },
              number: {
                value: 5
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
            {/* srcs.length &&
                srcs.map((source, i) => {
                  return (
                    <iframe key={i} id="ytplayer" type="text/html" width="320" height="180"
                      src={`https://www.youtube.com/embed/${source}?autoplay=0`}
                      frameBorder="0"></iframe>
                  )
                })
            */}
            <Grid>
              <Row>
                <Col xs={12} md={1} lg={1} className="works-col-header">
                  <Waypoint onEnter={function () { $('section').addClass('active') }}/>
                  <section id="works-header-anim">
                    <p className="works-header">
                      Works
                    </p>
                  </section>
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
                        <img className="works-meeseeks-gif" src="/assets/images/meeseeks_Screenshot.png"/>
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
}

export default Works
