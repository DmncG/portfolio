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
import $ from 'jquery'

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
      <div className="navbar" style={{width: '100%', padding: '0'}}>
        <AppBar showMenuIconButton={false}>
          <MenuItem primaryText={<Link className="navbar-menu-item" to="/home">  Home  </Link>} />
          <MenuItem primaryText={<Link className="navbar-menu-item" to="/works">  Works  </Link>} />
          <MenuItem primaryText={<Link className="navbar-menu-item" to="/about">  About  </Link>} />
        </AppBar>
      </div>
    )
  }
}

export default Navbar