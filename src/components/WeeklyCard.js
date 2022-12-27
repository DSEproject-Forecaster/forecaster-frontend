import React from 'react';
import { WiSandstorm, WiHumidity, WiCloudy, WiSolarEclipse } from "react-icons/wi";
import '../css/weeklyPredictions.css';

export function WeeklyCard(props) {
    const convertDate = (timestamp) => {
        const date = new Date(timestamp);
        let dayName = date.toLocaleString('en-us', {weekday:'short'})
        let month = date.toLocaleString('en-us', { month: 'short' });
        let day = date.toLocaleString('en-us', {day: '2-digit' });
        let currentDatetime = [dayName, day, month]
        return currentDatetime.join(" ")
    }

    const convertTime = (timestamp) => {
        const date = new Date(timestamp);
        let time = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' });
        return time;
    }

    return (
        <div className='container container-center shadow my-3'>
            <div>
                <div>
                {convertDate(props.timestamp)}
                </div>
                <div>
                {convertTime(props.timestamp)}
                </div>
            </div>
            {/* <div>
                <img src={getIcon(props.comment)}   className="carousel-icon" alt='overview icon' /> 
            </div> */}
            <div>{props.temp}°C</div>
            <div><WiSandstorm /> {props.windspeed} kmph</div>
            <div><WiHumidity /> {props.humidity}%</div>
            <div><WiCloudy /> {props.cloud}%</div>
            <div><WiSolarEclipse />{props.rad1} / {props.rad2}</div>
        </div>
    )
}