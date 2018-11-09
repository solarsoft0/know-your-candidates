import React, { Component } from 'react';
// import { render } from 'react-dom';
import Landing from './components/Landing';
import CandidateDetails from './components/CandidateDetails';
import CompareCandidates from './components/CompareCandidates';
import { Router } from "@reach/router";




class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        politicians : [],
        isLoaded: false
    }
}

componentDidMount() {
    fetch("https://civicmonitor.herokuapp.com/api/v2/politicians")
    .then((res)=>res.json())
    .then((res)=> {
        console.log(res.data)
        this.setState({
            isLoaded: true,
          politicians: res.data
        })
    })
  }

  




  render() {
    const { politicians } = this.state;

    return (
      <Router>
        <Landing path="/" />
        {politicians.map(politician => (
        <CandidateDetails  
          path="/details/:id"
          id={politician.id}
          key={politician.id}
          name= {politician.name}
          image = {politician.image}
          family = {politician.family}
          works = {politician.works}
          honors = {politician.honors}
         />
        ))}
        <CompareCandidates path="/compare" />
      </Router>  
    );
  }
}

export default App;
