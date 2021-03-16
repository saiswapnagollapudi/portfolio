import React, { Component } from 'react';
import ReactDOM from "react-dom";
import 'react-bootstrap';
import { Document, Page } from "react-pdf";
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
      <h1 style={center_style}> Sai Swapna Gollapudi </h1>
      <h3 style={center_style}> Data Science Graduate student </h3>
      <p > Focused on applied Machine Learning, Data Analysis. I am a learner who can never say I know it all</p>
      </div>
    );
  }
}
export default Home;
