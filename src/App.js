import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import Projects from './components/projects'
import Experience from './components/experience'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    const boxStyle = {
      margin: '10px',
      border: 'groove'
    };
    const center_style = { display: "flex",justifyContent: "center",alignItems: "center"};
    return (
      <Router>
      <div style={{backgroundColor: 'black',
        height: '92px',display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>
      <Link to={'/'} style={{textDecoration: 'none',color:'white'}}><b>Home</b></Link>
      <Link to={'/projects'} style={{paddingLeft: 100 , textDecoration: 'none',color:'white'}}><b>Projects</b></Link>
      <Link to={'/experience'} style={{paddingLeft: 100 , textDecoration: 'none',color:'white'}} className="navbar-brand"><b>Experience</b></Link>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={ Projects} />
        <Route path="/Experience" exact component={ Experience } />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
//return (
//  <Router>
//  <div>
//    <Home />
//    <Projects />
//    <Experience />
//  </div>
//  </Router>
//);
//}
//}
