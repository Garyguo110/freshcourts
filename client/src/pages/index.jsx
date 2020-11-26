import React, { Component } from 'react';
import "../App.css";
import Header from "../components/header/header";
import Filters from "../components/filters/filters";
import AllCourts from "../components/courts/allCourts";
import {addDays} from 'date-fns';

class MainPage extends Component {
  state = { 
    timeRange: {
      startTime: '7:00',
      endTime: '22:00'
    },
    dateRange: {
      startDate: new Date(),
      endDate: addDays(new Date(), 7)
    },
    search: null
   }

  timeRangeCallback = (timeRange) => {
     this.setState({ timeRange });
   }

  dateRangeCallback = (dateRange) => {
    const Dates = dateRange.split("-");
    const startDate = Dates[0].split(' ').join('');
    const endDate = Dates[1].split(' ').join('');
    this.setState({ dateRange: {
      startDate: startDate,
      endDate: endDate
    } });
  }

  searchCallback = (search) => {
    this.setState({ search });
  }

  render() { 
    return ( 
      <div className="background">
      <Header />
      <Filters timeRangeCallback={this.timeRangeCallback} dateRangeCallback={this.dateRangeCallback} searchCallback={this.searchCallback}/>
      <AllCourts timeRange={this.state.timeRange} dateRange={this.state.dateRange} search={this.state.search}/>
    </div>
     );
  }
}
 
export default MainPage;
