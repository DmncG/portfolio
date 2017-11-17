import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Home, Works, About} from '../components'
import Menu from 'material-ui-icons/Menu'
import AppBar from 'material-ui/AppBar'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const Navbar = props => {
  return (
    <div>
      <FloatingActionButton className='navbar-floating-btn'>
        <Menu/>
      </FloatingActionButton>
      <div className="navbar-headers">
        <NavLink className="navbar-home" to="/home">  Home  </NavLink>
        <NavLink to="/works">  Works  </NavLink>
        <NavLink to="/about">  About  </NavLink>
        <p className="navbar-test"> Bounce </p>
      </div>
    </div>
  )
}

export default Navbar