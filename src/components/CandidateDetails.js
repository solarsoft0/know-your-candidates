import React from 'react';
import Header from './Header';
// import Candidate from './Candidate';
// import firebase from '../firebase';
// import { Link } from "@reach/router";

class CandidateDetails extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            loading : true
        }
    }

    componentDidMount() {
       
      }


    render(){
        return(

            <div>
            <Header />

            <section className="section bg-home-img" id="home">
            <div className="home-center">
                <div className="home-desc-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto d-flex justify-content-center">
                                <div className="home-title text-center align-self-center">
                                    <h1 className="pt-2">{this.state.id}</h1>
                                    <h5 className="home-desc pt-4 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium omnis aspernatur sint. Eum esse, sapiente amet doloribus harum excepturi eveniet. Inventore, sapiente ullam ex tenetur est delectus quis. Omnis, maiores!.</h5>
                                   
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
                                <span className="pricing-icon"><i className="mdi mdi-rocket bg-orange text-white"></i></span>
                                <h5 className="py-3 m-0 text-primary">{this.state.candidates.candidate.name}</h5>                                    
                               <p>
                               
                               </p>
                               
                            </div>
                        </div>
                    </div>                                    
                </div>

                <div className="col-md-12 col-lg-8">
                    <div className="card pricing-card">
                        <div className="card-body">
                       
                         

                           <div>
                               <p>
                             
                               </p>
                           </div>
                        </div>
                    </div>                                    
                </div>

               
            </div>
         
         

        </div>
    </section>

            </div>
        )
    }
}


export default CandidateDetails;