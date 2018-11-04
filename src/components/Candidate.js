import React from 'react';
// import { Link } from "react-router-dom";
// import CandidateDetails from './CandidateDetails';
import { Link } from "@reach/router";

class Candidate extends React.Component{
  render(){
    const { name, image, id} = this.props;

  
    return(

      <Link to= {`/details/${id}`} className="col-md-4">
      <div className="card pricing-card">

          <div className="card-body">
         
              <div className="pricingTable">  
                  <span className="pricing-icon">
                  <img src= {image} alt={name} />
                 </span>
                  <h5 className="py-3 m-0 text-primary">{name}</h5>                                    
                  <p></p>

                  <Link to= {`/details/${id}`} className="btn btn-orange px-4">Learn more</Link>

              </div>
    
          </div>
          </div> 
          </Link>

    )
  }
}

  
export default Candidate;