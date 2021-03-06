import React, { Component } from 'react';
import SingleCourt from './singleCourt';
import {convertSessionData} from '../../utils/data/sessionDataReformat.js'

class AllCourts extends Component {
  state = {
  };

  render() {
    return (
      <section className="grid my-4">
        {/* Grabbing sessionData from convertSessionData*/}
        {Object.entries(convertSessionData()).map(
          ([key, value]) => (
            <div key={key}>
              <div className="column green box is-desktop is-centered my-2">
                <SingleCourt
                  court={value}
                  timeRange={this.props.timeRange}
                  dateRange={this.props.dateRange}
                />
              </div>
            </div>
          )
        )}
      </section>
    );
  }
}

export default AllCourts;
