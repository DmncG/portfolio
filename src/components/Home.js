import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

const Home = props => {
    return (
        <div>
        <Navbar/>
        <h1>Home. ¯\_(ツ)_/¯ </h1>
        <h2 class="intro">Hi. My name is Dominic and I am a Fullstack Software Engineer.</h2>
        </div>
      )  
} 

export default Home