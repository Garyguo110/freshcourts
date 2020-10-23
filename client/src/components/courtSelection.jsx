import React, { Component } from 'react';

class courtSelection extends Component {
    state = {  }
    render() { 
        return (
            <div className="box columns relative my-2 py-3">
                <div className="column is-two-thirds">
                    <h1 className="title is-5 center">{this.props.courtName}</h1>
                </div>
                <button className="button light-green is-rounded right">Add</button>
            </div>
         );
    }
}
 
export default courtSelection;