import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import NavbarLinks from './components/Nav'


export default class App extends Component {

  render() {
    return (

      <BrowserRouter>

<NavbarLinks/>
        <Switch>

          <Route exact path="/" render={()=><Homepage/>} />
          <Route path="/about" render={()=><About/>}/>

        </Switch>

      </BrowserRouter>

    )
  }
}
