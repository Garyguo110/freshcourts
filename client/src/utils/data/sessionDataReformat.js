// This function reformats SessionData from the database
// for easier use within the allCourts component

// rawSessions would be the raw data grabbed from the database
export const convertSessionData = (rawSessions) => {
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
};

// Format of the sessions after re-formating within convertSessionData
//
// sessions format
// sessions = {
//     "1": {
//         "courtName": "...",
//         "courtLocation": "...",
//         "courtSessions": {
//             "11/16/2020": [
//                 {
//                     "time": "9:00AM",
//                     "link": "..."
//                 }
//             ]
//         }
//     }
// }