import React, { Component } from 'react';
import CourtTitle from './courtTitle';
import TimeSlots from './timeSlots';

class SingleCourt extends Component {
    state = {  }
    render() { 
        return (
            <div className="columns is-centered my-4">
                <div className="column is-four-fifths green">
                    <div className="column has-text-centered">
                        <CourtTitle courtName={this.props.court.courtName} courtLocation={this.props.court.courtLocation}/>
                    </div>
                    <div className="columns is-mobile">
                        <TimeSlots timeRange={this.props.timeRange} dateRange={this.props.dateRange} courtSessions={this.props.court.courtSessions}/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SingleCourt;