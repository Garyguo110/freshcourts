import React, { Component } from 'react';
import { render} from 'react-dom';
import TimeRangeSlider from 'react-time-range-slider';
class TimeRange extends Component{
    constructor(props) {
        super(props);
        this.featureRef = React.createRef();
        this.timeChangeHandler = this.timeChangeHandler.bind(this);
        this.state = {
            // the "start" and "end" variables are referring to the start time and end time for the timeRange filter
            value: {
                start: "7:00",
                end: "22:00"
            }
        }
    }
    
    timeChangeHandler(time){
        this.setState({
            value: time
        });
        this.props.timeRangeCallback({
            startTime: time.start,
            endTime: time.end
        })
    }

    formatTime(timeValue) {
        const twelveHourClock = 12
        var hourTime = timeValue.substr(0, timeValue.indexOf(':'));
        var minuteTime = timeValue.substr(timeValue.indexOf(':'), timeValue.length);
        hourTime = Number(hourTime)
        var finalTime = ''

        // converting 24-hour time format to 12-hour time format (along with "AM" and "PM")
        // the "if" block is for time value that spills over 12-hour format (e.g. "13:00")
        if (hourTime > twelveHourClock) {
            hourTime -= twelveHourClock;
            finalTime = '' + hourTime + minuteTime + 'PM';
        }
        // the "else" block addresses time values within the 12-hour format but converts 
        // "12:00" into PM and all times before into AM (e.g. "9:00" --> "9:00 AM")
        else {
            if (hourTime === twelveHourClock) {
                finalTime = '' + hourTime + minuteTime + 'PM';
            }
            else {
                finalTime = '' + hourTime + minuteTime + 'AM';
            }
        }
        return finalTime
    }
    
    render() {
        var startTime = "7:00"
        var endTime = "22:00"
        return(<div className="column is-one-thid">
            <div className="time-range center">
				<b className="has-text-white">{this.formatTime(this.state.value.start)} - {this.formatTime(this.state.value.end)}</b>
			</div>
            <TimeRangeSlider
                disabled={false}
                format={24}
                maxValue={endTime}
                minValue={startTime}
                name={"time_range"}
                onChangeStart={this.changeStartHandler}
                onChange={this.timeChangeHandler}
                step={15}
                value={this.state.value}/>
        </div>);
    }
};

export default TimeRange;