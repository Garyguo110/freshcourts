import React, { Component } from 'react';
import CourtSelection from '../components/courtSelection';
import { Link } from 'react-router-dom';

class hotCourtSelection extends Component {
    state = { 
        courts: [
            {
                "id": "4438853",
                "name": "Alice Marble Tennis Court #1",
                "location": "Greenwich St & Hyde St, San Francisco, CA"
            },
            {
                "id": "4433542",
                "name": "Alice Marble Tennis Court #2",
                "location": "Greenwich St & Hyde St, San Francisco, CA"
            },
            {
                "id": "3333206",
                "name": "Alice Marble Tennis Court #3",
                "location": "Greenwich St & Hyde St, San Francisco, CA"
            },
            {
                "id": "3333250",
                "name": "Alice Marble Tennis Court #4",
                "location": "Greenwich St & Hyde St, San Francisco, CA"
            },
            {
                "id": "3333199",
                "name": "Balboa Park Tennis Court #1",
                "location": "Ocean Ave & San Jose Ave, San Francisco, CA"
            },
            {
                "id": "3333256",
                "name": "Balboa Park Tennis Court #2",
                "location": "Ocean Ave & San Jose Ave, San Francisco, CA"
            },
            {
                "id": "4456695",
                "name": "Balboa Park Tennis Court #3",
                "location": "Ocean Ave & San Jose Ave, San Francisco, CA"
            },
            {
                "id": "4456807",
                "name": "Balboa Park Tennis Court #4",
                "location": "Ocean Ave & San Jose Ave, San Francisco, CA"
            }
        ],
        selectedCourts : []
    }

    courtSelectCallback = (selectedCourt) => {
        this.setState(state => {
            const selectedCourts = [...state.selectedCourts, selectedCourt];
            console.log(selectedCourts)
            return {
                selectedCourts,
                value: '',
            };
        });
    };

    handleClick = () => {
        // sent to database
    }
    
    render() { 
        return ( 
        <div className="wrapper">
            <h1 className="has-text-white subtitle is-2">Select Your Favourite Courts!</h1>
            <div className="form-wrapper">
                {this.state.courts.map((court)=>
                    <div key={court.id}>
                        <CourtSelection courtName={court.name} courtLocation={court.location} courtSelectCallback={this.courtSelectCallback}/>
                    </div>
                )}
                {this.state.selectedCourts.length > 0 && (
                    <div className="createAccount width-thirty">
                        <Link to="/">
                            <button className="button subtitle is-rounded is-5 mb-1 has-text-white has-text-weight-medium" onClick={this.handleClick}>Continue</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
         );
    }
}
 
export default hotCourtSelection;