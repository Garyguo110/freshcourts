import React, { Component } from 'react';
import SingleCourt from './singleCourt';

class AllCourts extends Component {
  state = {
    rawSessions: [
      {
        id: 1,
        court: {
          id: 1,
          name: 'Alice Marble Tennis Court #1',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/23/2020',
        timeSlot: '7:00 AM',
        isAvailability: 'available',
      },
      {
        id: 0,
        court: {
          id: 1,
          name: 'Alice Marble Tennis Court #1',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/23/2020',
        timeSlot: '8:00 AM',
        isAvailability: 'available',
      },
      {
        id: 2,
        court: {
          id: 1,
          name: 'Alice Marble Tennis Court #1',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/23/2020',
        timeSlot: '9:00 AM',
        isAvailability: 'available',
      },
      {
        id: 3,
        court: {
          id: 1,
          name: 'Alice Marble Tennis Court #1',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/23/2020',
        timeSlot: '1:00 PM',
        isAvailability: 'available',
      },
      {
        id: 4,
        court: {
          id: 1,
          name: 'Alice Marble Tennis Court #1',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/23/2020',
        timeSlot: '7:00 PM',
        isAvailability: 'available',
      },
      {
        id: 5,
        court: {
          id: 1,
          name: 'Alice Marble Tennis Court #1',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/22/2020',
        timeSlot: '7:00 AM',
        isAvailability: 'available',
      },
      {
        id: 6,
        court: {
          id: 1,
          name: 'Alice Marble Tennis Court #1',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/22/2020',
        timeSlot: '9:00 AM',
        isAvailability: 'available',
      },
      {
        id: 7,
        court: {
          id: 1,
          name: 'Alice Marble Tennis Court #1',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/22/2020',
        timeSlot: '2:00 PM',
        isAvailability: 'available',
      },
      {
        id: 8,
        court: {
          id: 2,
          name: 'Alice Marble Tennis Court #2',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/23/2020',
        timeSlot: '7:00 AM',
        isAvailability: 'available',
      },
      {
        id: 9,
        court: {
          id: 2,
          name: 'Alice Marble Tennis Court #2',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/23/2020',
        timeSlot: '9:00 AM',
        isAvailability: 'available',
      },
      {
        id: 10,
        court: {
          id: 2,
          name: 'Alice Marble Tennis Court #2',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/23/2020',
        timeSlot: '11:00 AM',
        isAvailability: 'available',
      },
      {
        id: 11,
        court: {
          id: 2,
          name: 'Alice Marble Tennis Court #2',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/23/2020',
        timeSlot: '2:00 PM',
        isAvailability: 'available',
      },
      {
        id: 12,
        court: {
          id: 2,
          name: 'Alice Marble Tennis Court #2',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/22/2020',
        timeSlot: '9:00 AM',
        isAvailability: 'available',
      },
      {
        id: 13,
        court: {
          id: 2,
          name: 'Alice Marble Tennis Court #2',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/22/2020',
        timeSlot: '11:00 AM',
        isAvailability: 'available',
      },
      {
        id: 14,
        court: {
          id: 2,
          name: 'Alice Marble Tennis Court #2',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/22/2020',
        timeSlot: '2:00 PM',
        isAvailability: 'available',
      },
      {
        id: 15,
        court: {
          id: 3,
          name: 'Alice Marble Tennis Court #3',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/23/2020',
        timeSlot: '9:00 AM',
        isAvailability: 'available',
      },
      {
        id: 16,
        court: {
          id: 3,
          name: 'Alice Marble Tennis Court #3',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/23/2020',
        timeSlot: '11:00 AM',
        isAvailability: 'available',
      },
      {
        id: 17,
        court: {
          id: 3,
          name: 'Alice Marble Tennis Court #3',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/23/2020',
        timeSlot: '2:00 PM',
        isAvailability: 'available',
      },
      {
        id: 18,
        court: {
          id: 3,
          name: 'Alice Marble Tennis Court #3',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/22/2020',
        timeSlot: '7:00 AM',
        isAvailability: 'available',
      },
      {
        id: 19,
        court: {
          id: 3,
          name: 'Alice Marble Tennis Court #3',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/22/2020',
        timeSlot: '9:00 AM',
        isAvailability: 'available',
      },
      {
        id: 20,
        court: {
          id: 3,
          name: 'Alice Marble Tennis Court #3',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/22/2020',
        timeSlot: '11:00 AM',
        isAvailability: 'available',
      },
      {
        id: 21,
        court: {
          id: 3,
          name: 'Alice Marble Tennis Court #3',
          location: 'Greenwich St & Hyde St San Francisco, CA',
        },
        date: '10/22/2020',
        timeSlot: '2:00 PM',
        isAvailability: 'available',
      },
    ],
    sessions: {},
  };

  convertSessionData(rawSessions) {
    const rawSessionsLength = rawSessions.length;
    var sessions = {};
    for (var i = 0; i < rawSessionsLength; i++) {
      const courtId = rawSessions[i]['court']['id'];
      const courtSessionDate = rawSessions[i]['date'];
      const courtSessionTime = rawSessions[i]['timeSlot'];
      const courtSessionLink = Math.random();
      var courtSessions = {};
      if (courtId in sessions) {
        courtSessions = sessions[courtId]['courtSessions'];
        const newSession = {
          time: courtSessionTime,
          link: courtSessionLink,
        };
        if (courtSessionDate in courtSessions) {
          courtSessions[courtSessionDate].push(newSession);
        } else {
          courtSessions[courtSessionDate] = [newSession];
        }
      } else {
        const court = rawSessions[i]['court'];
        const courtName = court['name'];
        const courtLocation = court['location'];
        courtSessions[courtSessionDate] = [
          {
            time: courtSessionTime,
            link: courtSessionLink,
          },
        ];
        sessions[courtId] = {
          courtName: courtName,
          courtLocation: courtLocation,
          courtSessions: courtSessions,
        };
      }
    }
    return sessions;
  }

  // sessions format
  // sessions = {
  //     "1": {
  //         "courtName": "...",
  //         "courtLocation": "...",
  //         "courtSessions": {
  //             "10/23/2020": [
  //                 {
  //                     "time": "9:00AM",
  //                     "link": "..."
  //                 }
  //             ]
  //         }
  //     }
  // }

  render() {
    return (
      <section className="grid my-4">
        {Object.entries(this.convertSessionData(this.state.rawSessions)).map(
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
