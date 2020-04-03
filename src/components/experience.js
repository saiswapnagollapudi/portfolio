import React, { Component } from 'react';
import ReactDOM from "react-dom";
import 'react-bootstrap';

class Experience extends Component {

  render() {
    const divStyle = {
      margin: '30px',
      border: 'groove'
    };
    const center_style = { display: "flex",justifyContent: "center",alignItems: "center"};
    return (
      <div style={{
        position: 'absolute', left: '50%', top: '20%',
        transform: 'translate(-50%, 0%)'
    }}>
      <h2 style={center_style}> Work Experience </h2>
      <div ><p><b style={center_style}>Data Analyst</b>
         <br /><b  style={center_style}>Tata Consultancy Services, India</b>
         <br />Built supervised predictive classification models for retail firms for classifying the order returns as damaged products or not, based on 2 years historical data using logistic regression, decision trees and random forest. Implemented techniques like SMOTE, oversampling and under-sampling to handle imbalanced data.(Python,Sklearn)
         <br />Developed automation of financial analysis dashboards to help the financial users visualize analysis dashboard and make business decisions.(RStudio, Spark,SQL, Hadoop, Complex Data Analysis)
         <br />Performed descriptive and inferential statistical analysis and designed data analytics models for deriving business insights from customer’s data.
         <br />Actively participated in gathering the business requirement, brainstorming with clients and team while building analytics models and visualizing their inferences for multiple business use cases.
         </p>
      </div>
      <div style={center_style}><p>
         <b  style={center_style}>Graduate Assistant - Research Applications Support Specialist</b>
         <br /><b  style={center_style}>Indiana University,Bloomington</b>
         <br />Built a REACT CRUD application with MongoDB, EXPRESS, REACT, and NODE.JS
         <br />Built dashboards using Tableau for presenting the analysis results of research applications usage.</p>
      </div>
      </div>
    );
  }
}
export default Experience;
