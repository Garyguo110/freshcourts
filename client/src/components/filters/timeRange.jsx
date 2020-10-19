import React, { Component } from 'react';
import { render} from 'react-dom';
import TimeRangeSlider from 'react-time-range-slider';
class TimeRange extends Component{
    constructor(props) {
        super(props);
        this.featureRef = React.createRef();
        this.changeStartHandler = this.changeStartHandler.bind(this);
        this.timeChangeHandler = this.timeChangeHandler.bind(this);
        this.changeCompleteHandler = this.changeCompleteHandler.bind(this);
        this.state = {
            value: {
                start: "7:00",
                end: "22:00"
            }
        }
    }
    
    changeStartHandler(time){
        console.log("Start Handler Called", time);
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
        var hourTime = timeValue.substr(0, timeValue.indexOf(':'));
        var minuteTime = timeValue.substr(timeValue.indexOf(':'), timeValue.length);
        hourTime = Number(hourTime)
        var finalTime = ''
        if (hourTime>12) {
            hourTime -= 12;
            finalTime = '' + hourTime + minuteTime + 'PM';
        }
        else {
            if (hourTime === 12) {
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
                minValue={"07:00"}
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