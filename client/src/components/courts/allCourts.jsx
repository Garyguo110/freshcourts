import React, { Component } from 'react';
import SingleCourt from './singleCourt';
import {convertSessionData} from '../../utils/data/sessionDataReformat.js'

class AllCourts extends Component {
  state = {
    rawSessionData: []
  };

  async getAPIresult() {
    var query = ''
    await fetch("http://localhost:5000/listSessions")
      .then(async function(response) {
        query = response.json();
      })
    return query
  };

  async componentDidMount() {
    const sessionsQuery = await this.getAPIresult()
    this.setState({rawSessionData: sessionsQuery})
  }

  render() {
    return (
      <section className="grid my-4">
        {/* Grabbing sessionData from convertSessionData*/}
        {Object.entries(convertSessionData(this.state.rawSessionData)).map(
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
