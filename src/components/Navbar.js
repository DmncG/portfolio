import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Home, Works, About} from '../components'
import Menu from 'material-ui-icons/Menu'
import AppBar from 'material-ui/AppBar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ArrowBack from 'material-ui-icons/ArrowBack'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'

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
        <FloatingActionButton className='navbar-floating-btn'/>
        <div className="navbar-headers">
          <NavLink className="navbar-home" to="/home">  Home  </NavLink>
          <NavLink to="/works">  Works  </NavLink>
          <NavLink to="/about">  About  </NavLink>
          <div className="navbar-test animated fadeInRight"></div>
        </div>
      </div>
    )
  }
}

export default Navbar