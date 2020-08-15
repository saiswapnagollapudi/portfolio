import React, { Component } from 'react';
import ReactDOM from "react-dom";
import 'react-bootstrap';

class Experience extends Component {

  render() {
    const divStyle = {
      margin: '15px',
      border: 'outset',
      backgroundColor: 'snow'
    };
    const center_style = { display: "flex",justifyContent: "center",alignItems: "center"};
    const textshadow = {
    color:'black',
    fontFamily:'Times New Roman',
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10
  };
    return (
      <div style={{
        position: 'absolute', left: '50%', top: '20%',
        transform: 'translate(-50%, 0%)'
    }}>
    <h2 style={center_style}> Work Experience </h2>
    <div style = {textshadow,divStyle}>
      <b style={center_style}>Data Science Intern</b>
         <br /><b  style={center_style}>Capital One, US</b>
         <p>Built a model to identify patterns in customers digital footprint that lead to calls(LSTM/GRU)</p>
         <p>Performed analysis on customer intent from click stream data and associated call volume</p>
         <p>Built a tableau dashboard for users to gain quick insights on Customer intent and call volume analysis</p>
    </div>
    <div style = {textshadow,divStyle}>
      <b style={center_style}>Data Analyst</b>
         <br /><b  style={center_style}>Tata Consultancy Services, India</b>
         <p>Built supervised predictive classification models for retail firms for classifying the order returns as damaged products or not, based on 2 years historical data using logistic regression, decision trees and random forest. Implemented techniques like SMOTE, oversampling and under-sampling to handle imbalanced data.(Python,Sklearn)</p>
         <p>Developed automation of financial analysis dashboards to help the financial users visualize analysis dashboard and make business decisions.(RStudio, Spark,SQL, Hadoop, Complex Data Analysis)</p>
         <p>Performed descriptive and inferential statistical analysis and designed data analytics models for deriving business insights from customer’s data.</p>
         <p>Actively participated in gathering the business requirement, brainstorming with clients and team while building analytics models and visualizing their inferences for multiple business use cases.</p>
      </div>
      <div style = {textshadow,divStyle}>
         <b  style={center_style}>Graduate Assistant - Research Applications Support Specialist</b>
         <br /><b  style={center_style}>Indiana University,Bloomington</b>
         <p>Built a REACT CRUD application with MongoDB, EXPRESS, REACT, and NODE.JS</p>
         <p>Built dashboards using Tableau for presenting the analysis results of research applications usage.</p>
      </div>
      </div>
    );
  }
}
export default Experience;
