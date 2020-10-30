import React, { Component } from 'react';

class courtSelection extends Component {
    state = {  }

    handleClick = (data) => {
        this.refs.btn.setAttribute("disabled", "disabled");
        this.props.courtSelectCallback(data)
    }

    render() { 
        return (
            <div className="box columns relative my-2 py-3">
                <div className="column is-two-thirds">
                    <h1 className="title is-5 center">{this.props.courtName}</h1>
                </div>
                <button className="button light-green is-rounded right" ref="btn" onClick={() => this.handleClick(this.props.courtName)}>Add</button>
            </div>
         );
    }
}
 
export default courtSelection;