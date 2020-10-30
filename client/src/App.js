import React, { Component } from 'react';
// import { SessionProvider } from "./FreshContext";
import "./App.css";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './pages/index';
import Signup from './pages/Signup';
import HotCourtSelection from './pages/hotCourtSelection';

class App extends Component {
  render() { 
    return ( 
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/hotCourtSelection" component={HotCourtSelection} />
      </Router>
     );
  }
}
 
export default App;
