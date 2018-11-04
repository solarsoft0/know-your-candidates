import React, { Component } from 'react';

class Candidate extends Component {
    render() {
        return(
            <div className="col-md-12 col-lg-4">
            <div className="card pricing-card">
                <div className="card-body">
                    <div className="pricingTable">  
                        <span className="pricing-icon"><i class="mdi mdi-rocket bg-orange text-white"></i></span>
                        <h5 className="py-3 m-0 text-primary">Candidates name</h5>                                    
                       <p>Political Party</p>
                        <a href="candidate.html" className="btn btn-orange px-4">Learn more</a>
                    </div>
                </div>
            </div>                                    
        </div>
        );
    }
  }


export default Candidate;