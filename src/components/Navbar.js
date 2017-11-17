import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Home, Works, About} from '../components'
import Menu from 'material-ui-icons/Menu'
import AppBar from 'material-ui/AppBar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ArrowBack from 'material-ui-icons/ArrowBack'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hovering: false,
      clicked: false
    }
  }

  render () {
    return (
      <div>
        {this.state.clicked
          ? <FloatingActionButton className='navbar-floating-btn' onClick={() => this.setState({clicked: false})}> <ArrowBack/> </FloatingActionButton>
          : <FloatingActionButton className='navbar-floating-btn' onClick={() => this.setState({clicked: true})}> <Menu/> </FloatingActionButton>
        }
        <div className="navbar-headers">
          <NavLink className="navbar-home" to="/home">  Home  </NavLink>
          <NavLink to="/works">  Works  </NavLink>
          <NavLink to="/about">  About  </NavLink>
          <div className="navbar-test"></div>
        </div>
      </div>
    )
  }
}

export default Navbar