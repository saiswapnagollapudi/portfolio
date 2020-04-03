import React, { Component } from 'react';
import ReactDOM from "react-dom";
import 'react-bootstrap';

class Projects extends Component {

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
      <h2  style={center_style}> Projects </h2>
      <div><p><b style={center_style}>Unsupervised Topic Modeling on News dataset</b>
         <br />Implemented the collapsed Gibbs sampler for LDA modeling to identify topics in 20 newsgroups text data.
         <br /><b  style={center_style}>Classification of e-commerce products</b>
         <br />Built an automation engine to classify the e-commerce products into various categories using SVM, random forest and neural networks.
         <br />Built a regression model for predicting crime rate using Bayesian Linear Regression with hyper parameter tuning and Kcross fold validation.
         <br /><b  style={center_style}>Product Review Sentiment Analysis</b>
         <br /> Built e-commerce evaluator product that web scraps data from various e-commerce websites and analyses customer review and product pages using sentiment analysis models and NLP to provide insights to manufacturers.
         <br /><b  style={center_style}>Automated Essay Grading System using Natural Language Processing</b>
         <br />Feature extraction on text data using POS Tagger, Word2Vec and modeling with NLP and ensemble learning.
         <br />Implemented Association rule mining, classification, clustering and statistical analysis to extract insights.
         <br /><b  style={center_style}>Bayesian Belief Networks for Restaurant violations predictions</b>
         <br />Neural network and Bayesian belief networks for predicting violations of a restaurant using Yelp dataset.
         <br /><b  style={center_style}>Artificial Intelligence based chat bot</b>
         <br />Built a virtual agent chat bot using Recurrent Neural Networks and NLP that acts as a personal fitness and health advisor.</p>
      </div>
      </div>
    );
  }
}
export default Projects;
