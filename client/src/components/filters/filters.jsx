import React, { Component } from 'react';
import DateInput from "./dateRangePicker";
import SearchBar from "./searchBar";
import TimeRange from "./timeRange";

class Filters extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="grid pt-6 relative level">
                <div className="columns is-desktop is-vcentered">
                    <DateInput dateRangeCallback={this.props.dateRangeCallback}/>
                    <SearchBar searchCallback={this.props.searchCallback}/>
                    <TimeRange timeRangeCallback={this.props.timeRangeCallback}/>
                </div>
            </section>
         );
    }
}
 
export default Filters;