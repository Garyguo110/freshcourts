import React, { Component } from 'react';

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="column is-one-third px-4">
                <div className="control">
                    <input className="input" type="text" placeholder="Search Court by Name"/>
                </div>
            </div>
         );
    }
}
 
export default SearchBar;