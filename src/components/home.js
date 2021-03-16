import React, { Component } from 'react';
import ReactDOM from "react-dom";
import 'react-bootstrap';
import Logo from "./logo.jpg"
import Logo_linkedin from "./LinkedIn-Logo.png"
import Logo_github from "./GitHub-Logo.png"
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
class Home extends Component {
  render() {
    const divStyle = {
      margin: '30px',
      border: 'groove'
    };
    var styles = {
    justifyContent: 'center',
    alignItems: 'center',
  };
    const center_style = { display: "flex",justifyContent: "center",alignItems: "center"};
    return (
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
      <p/>
      <img src={Logo} class="center" style={{width: 200, height: 200, borderRadius: 400/2,justifyContent: 'center',
      alignItems: 'center'}} />
      <h1 style={center_style}> Sai Swapna Gollapudi </h1>
      <h3 style={center_style}> Data Science Graduate student </h3>
      <p > Focused on applied Machine Learning, Data Analysis. I am a learner who can never say I know it all</p>
      <div class="center">
      <a href="https://www.linkedin.com/in/sai-swapna-gollapudi-316a83a2/" target="_blank">
      <img src={Logo_linkedin} style={{width: 30, height: 30, borderRadius: 30/2,justifyContent: 'center',
      alignItems: 'center'}}/></a>
      <a href="https://github.com/swapsha" target="_blank">
      <img src={Logo_github} style={{width: 30, height: 30, borderRadius: 30/2,justifyContent: 'center',
      alignItems: 'center',paddingLeft: 30}}/></a>
      </div>
      </div>
    );
  }
}
export default Home;
