import React, { Component } from 'react';
// import { SessionProvider } from "./FreshContext";
import "./App.css";
import Header from "./components/header/header";
import Filters from "./components/filters/filters";
import AllCourts from "./components/courts/allCourts";
import {addDays} from 'date-fns';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import MainPage from './pages/index';
import Signup from './pages/Signup';

class App extends Component {
  render() { 
    return ( 
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={Signup} />
      </Router>
     );
  }
}
 
export default App;
