import React, { Component } from 'react';
// import firebase from '../firebase';
import Header from './Header';
import Candidate from './Candidate';
import Search from './Search';
// import axios from 'axios';



class Landing extends Component {

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

    var { isLoaded, politicians } = this.state;
    if (!isLoaded) {
        return <div>loading...</div>
    } else {
    return (
      <div>
        <Header/>

        <section className="section bg-home-img" id="home">
            <div className="home-center">
                <div className="home-desc-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto d-flex justify-content-center">
                                <div className="home-title text-center align-self-center">
                                    <h1 className="pt-2">Know your candidates</h1>
                                    <h5 className="home-desc pt-4 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium omnis aspernatur sint. Eum esse, sapiente amet doloribus harum excepturi eveniet. Inventore, sapiente ullam ex tenetur est delectus quis. Omnis, maiores!.</h5>
                                   
                                    <div>
                                    <Search/>
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
                <div className="col-md-5 mx-auto text-center mb-5">
                    <i className="mdi mdi-diamond text-primary font-20 mr-2"></i>
                    <h3 className="mb-3 title">2019 Presidentials candidates</h3>
                   
                </div>
            </div>

            <div className="row">

            {politicians.map(politician => (
                <Candidate
                        key={politician.id}
                        id={politician.id}
                        name= {politician.name}
                        image = {politician.image}
                         
                />
            )
               
        )}

        </div>
         
        </div>
    </section>

    
    <section className="section pb-0" id="features">
    <div className="container">
        <div className="row">
            <div className="col-md-8 mx-auto text-center mb-5">
                <i className="mdi mdi-creation text-primary font-20 mr-2"></i>
                <h3 className="mb-3 title">Compare candidates</h3>
                <p className="text-muted font-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsam beatae atque ipsa officiis fugiat quidem nostrum, exercitationem magni suscipit quia, id excepturi veritatis labore esse, magnam commodi natus nihil?.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="card shadow-inset">
                    <div className="card-body">
                        <div className="features-cantain text-center">
                            <i className="mdi mdi-account-multiple-plus font-24 bg-soft-pink"></i>
                            <h4 className="mb-3">By Political Party</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio error, nisi mollitia debitis dolorem adipisci veritatis nobis culpa, alias, corrupti at blanditiis necessitatibus. Consequuntur rerum tempore et dolorem in..</p>
                        </div>
                    </div>                            
                </div>
            </div>
            <div className="col-md-4">
                <div className="card shadow-inset">
                    <div className="card-body">
                        <div className="features-cantain text-center">
                            <i className="mdi mdi-google-wallet font-24 bg-soft-warning"></i>
                            <h4 className="mb-3">By Policy </h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cumque sit sint temporibus, consectetur placeat ut nihil. Quis ducimus a provident similique? Perspiciatis, quam. Non culpa quibusdam vel fuga error!.</p>
                        </div>
                    </div>                            
                </div>
            </div>
            <div className="col-md-4">
                <div className="card shadow-inset">
                    <div className="card-body">
                        <div className="features-cantain text-center">
                            <i className="mdi mdi-forum font-24 bg-soft-success"></i>
                            <h4 className="mb-3">By region</h4>
                            <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque soluta, impedit nobis laboriosam deleniti eligendi dolorem, nam velit sunt incidunt dolore quasi recusandae illum eveniet. Dicta quibusdam itaque odio est!.</p>
                        </div>
                    </div>                            
                </div>
            </div>
        </div>
    </div>
</section>

      </div>
    );
  }
}
}

export default Landing;
