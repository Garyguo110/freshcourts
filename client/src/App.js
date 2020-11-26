import React, { Component } from 'react';
// import { SessionProvider } from "./FreshContext";
import "./App.css";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './pages/index';
import Signup from './pages/Signup';
import HotCourtSelection from './pages/hotCourtSelection';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiResponse: ''
    };
}

  async getAPIresult() {
    var query = ''
    await fetch("http://localhost:5000/listSessions")
      .then(async function(response) {
        query = response.json();
      })
    return query
  }

  async componentDidMount() {
    const query = await this.getAPIresult()
    this.setState({apiResponse: query})
    console.log(this.state.apiResponse)
  }

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
