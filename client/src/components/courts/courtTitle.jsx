import React, { Component } from 'react';

class CourtTitle extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="box">
                <h1 className="title is-3 center">{this.props.courtName}</h1>
                <h2 className="subtitle is-6 center">{this.props.courtLocation}</h2>
            </div>
         );
    }
}
 
export default CourtTitle;