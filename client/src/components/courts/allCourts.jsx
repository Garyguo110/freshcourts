import React, { Component } from 'react';
import SingleCourt from './singleCourt';
import {convertSessionData} from '../../utils.js'

class AllCourts extends Component {
  state = {
  };

  render() {
    return (
      <section className="grid my-4">
        {Object.entries(convertSessionData(this.state.rawSessions)).map(
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
