import React, {Component} from 'react'
import {Route, Router} from 'react-router'
import history from './history'
import {Switch, Redirect} from 'react-router-dom'
import {Home, About, Works, NotFound} from './components'

const Routes = props => {
    return (
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/works" component={Works} />
            <Route path="/about" component={About} />
            <Route path="/error" component = {NotFound} />
            <Redirect to= "/error" component={NotFound} /> 
          </Switch>    
        </Router>
      )  
} 

export default Routes

    
