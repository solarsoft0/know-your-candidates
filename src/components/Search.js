import React, { Component } from 'react';

var divStyle = {
    width: '100%',
     height: '50px',
     borderRadius: '5px',
      border: '1px solid #efefef',
      padding: '10px'
  }

  
class Search extends Component {
    state = {
        name : ""
    };

    habdleNameChange = event => {
        this.setState({
            name: event.target.value
        });
    };

    render() {
        return(
            <div className="mt-5">
                <input type="text" 
                    onChange = {this.habdleNameChange}
                    id="name" 
                    value={this.state.name}
                    placeholder="Search prefered candidate..."  
                    style={divStyle}
                    />
             </div>
        );
    }
  }


export default Search;