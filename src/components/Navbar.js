import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Home, Works, About} from '../components'

const Navbar = props => {
    return (
        <div>
        <NavLink to="/home">  Home  </NavLink>
        <NavLink to="/works">  Works  </NavLink>
        <NavLink to="/about">  About  </NavLink>
        </div>
      )  
} 

export default Navbar