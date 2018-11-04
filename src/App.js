import React, { Component } from 'react';
// import { render } from 'react-dom';
import Landing from './components/Landing';
import CandidateDetails from './components/CandidateDetails';
import CompareCandidates from './components/CompareCandidates';
import { Router } from "@reach/router";




class App extends Component {


  render() {
    return (
      <Router>
        <Landing path="/" />
        <CandidateDetails  path="/details/:id" />
        <CompareCandidates path="/compare" />
      </Router>  
    );
  }
}

export default App;
