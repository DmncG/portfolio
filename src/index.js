import '../public/css/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { grey300, grey50, orange300, fullWhite } from 'material-ui/styles/colors'

import injectTapEventPlugin from 'react-tap-event-plugin'

const primary = orange300
const accent = grey300

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: primary,
    primary2Color: orange300,
    accent1Color: accent
  },
  fontFamily: 'Raleway, sans-serif',
  appBar: {
    height: 20,
    accent1Color: accent
  },
  floatingActionButton: {
  }
})

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Routes/>
  </MuiThemeProvider>
)

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)

injectTapEventPlugin()
