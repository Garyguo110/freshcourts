import React, { Component } from 'react';
import { render} from 'react-dom';
import TimeRangeSlider from 'react-time-range-slider';
class TimeRange extends Component{
    constructor(props) {
        super(props);
        this.featureRef = React.createRef();
        this.timeChangeHandler = this.timeChangeHandler.bind(this);
        this.changeCompleteHandler = this.changeCompleteHandler.bind(this);
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
        // the "if" block for time value that spills over 12-hour format (e.g. "20:00")
        if (hourTime > twelveHourClock) {
            hourTime -= twelveHourClock;
            finalTime = '' + hourTime + minuteTime + 'PM';
        }
        // the "else" block addresses time values ("0")
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
    
    changeCompleteHandler(time){
        console.log("Complete Handler Called", time);
    }
    
    render() {
        return(<div className="column is-one-thid">
            <div className="time-range center">
				<b className="has-text-white">{this.formatTime(this.state.value.start)} - {this.formatTime(this.state.value.end)}</b>
			</div>
            <TimeRangeSlider
                disabled={false}
                format={24}
                maxValue={"22:00"}
                minValue={"7:00"}
                name={"time_range"}
                onChangeStart={this.changeStartHandler}
                onChangeComplete={this.changeCompleteHandler}
                onChange={this.timeChangeHandler}
                step={15}
                value={this.state.value}/>
        </div>);
    }
};

export default TimeRange;