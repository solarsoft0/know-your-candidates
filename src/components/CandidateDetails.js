import React, { Fragment } from 'react';
import Header from './Header';
// import Candidate from './Candidate';
// import firebase from '../firebase';
// import { Link } from "@reach/router";



class CandidateDetails extends React.Component{
    render(){
      const { name, image, family, honors, works} = this.props;
  
    return(

        <Fragment>
        <Header />

        
            <div>
            <section className="section bg-home-img" id="home">
            <div className="home-center">
                <div className="home-desc-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto d-flex justify-content-center">
                                <div className="home-title text-center align-self-center">
                                    <h1 className="pt-2">{name}</h1>
                                   
                                    <div>
                                    
                                    </div>
                                
                            </div>
                                                    
                        </div>
                    </div>
                </div>
            </div>  
            </div>  
        </section>
            
        
            <section className="section" id="pricing">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <div className="card pricing-card">
                                <div className="card-body">
                                    <div className="pricingTable">  
                                        <span className="pricing-icon">
                                            <img src={image} alt={name} />
                                        </span>
                                        <h5 className="py-3 m-0 text-primary">{name}</h5>                                    
                                  
                                    
                                    </div>
                                </div>
                            </div>                                    
                        </div>

                        <div className="col-md-12 col-lg-8">
                            <div className="card pricing-card">
                                <div className="card-body">
                                <div>
                                    <p>{family}</p>
                                </div>
                                </div>
                            </div> 
                            
                            <div className="card pricing-card">
                            <div className="card-body">
                            <div>
                                <p>{honors}</p>
                            </div>
                            </div>
                        </div> 

                        <div className="card pricing-card">
                        <div className="card-body">
                        <div>
                            <p>{works}</p>
                        </div>
                        </div>
                    </div> 
                        </div>

                    
                    </div>
                
                

                </div>
            </section>
           
           
            </div>

    </Fragment>
     
    );
    }
}


export default CandidateDetails;