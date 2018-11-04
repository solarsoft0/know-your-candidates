import React, { Component } from 'react';

var divStyle = {
    width: '100%',
     height: '50px',
     borderRadius: '5px',
      border: '1px solid #efefef',
      padding: '10px'
  }

  
class Search extends Component {
    render() {
        return(
            <div className="mt-5">
                                        <input type="text" placeholder="Search prefered candidates..."  style={divStyle}/>
                                </div>
        );
    }
  }


export default Search;