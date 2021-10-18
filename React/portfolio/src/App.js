import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Navigationlinks from './components/Navigationlinks';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Navigationlinks/>
     <Switch>
         <Router exact path="/">
           <Home/>
         </Router>
         <Router exact path="/projects">
           <Projects/>
         </Router>
         <Router exact path="/about">
           <About/>
         </Router>
         <Router exact path="/contact">
           <Contact/>
         </Router>
         <Router exact path="/contact">
           <Contact/>
         </Router>
         <Router>
           <Notfound/>
         </Router>
     </Switch>
     <Footer/>
    </Router>
  )
}

export default App



