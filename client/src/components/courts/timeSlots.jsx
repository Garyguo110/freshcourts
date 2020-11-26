import React, { Component } from 'react';

class TimeSlots extends Component {
    state = { 
    }

    verifyTime(timeRange, timeSlot) {
        var floatStartTime = this.convertTimeToInteger(String(timeRange.startTime), '24');
        var floatEndTime = this.convertTimeToInteger(String(timeRange.endTime), '24');
        var floatTimeSlot = this.convertTimeToInteger(timeSlot, '12');

        if (floatTimeSlot >= floatStartTime && floatTimeSlot <= floatEndTime) {
            return true
        }
        return false
    }

    verifyDate(dateRange, date) {
        const startDate = new Date(dateRange.startDate);
        const endDate = new Date(dateRange.endDate);
        const currentDate = new Date(date);
        return (currentDate >= startDate  && currentDate <= endDate)
    }

    convertTimeToInteger(time, format){
        if (format === '12') {
            var hour = time.substr(0, time.indexOf(':'));
            var minute = time.substr(time.indexOf(':')+1, time.indexOf(':')+3);
            var afternoon = (time.substr(-2,) === 'PM') ? true : false;
            hour = parseFloat(hour);
            if (afternoon && hour !== 12) {
                hour += 12;
            }
            minute = parseFloat(minute)/60;
            return (hour + minute)
        }
        else {
            var integerTime = time.split(":");
            hour = parseFloat(integerTime[0]);
            minute = parseFloat(integerTime[1])/60;
            return (hour + minute)
        }
    }

    render() { 
        return ( 
            <div className="column">
                {
                    Object.entries(this.props.courtSessions).map(([key, value])=>
                    (this.verifyDate(this.props.dateRange, key) &&
                    <div className="columns has-text-weight-bold is-vcentered has-background-white box my-4" key={key}>
                        <div className="column is-one-quarter">
                            {key}
                        </div>
                        <div className="column level-right">
                            <div className="columns is-multiline level-right">
                                {value.map((sub)=>
                                    (this.verifyTime(this.props.timeRange, sub.time) &&
                                        <div className="column is-one-quarter" key={sub.link}>
                                            <a className="button light-green has-text-white is-rounded">{sub.time}</a> 
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    )
                    )
                }
            </div>
         );
    }
}
 
export default TimeSlots;