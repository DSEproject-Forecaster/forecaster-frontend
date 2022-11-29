import React from 'react';
import {MdLocationOn} from "react-icons/md";
import { getIcon } from '../Utils/getIcon';

export function OverviewSummary(props){

    const getDateTime = () => {
        const date = new Date();
        let dayName = date.toLocaleString('en-us', {timeZone:"Australia/Melbourne", weekday:'short'})
        let month = date.toLocaleString('en-us', {timeZone:"Australia/Melbourne", month: 'short' });
        let day = date.toLocaleString('en-us', {timeZone:"Australia/Melbourne", day: '2-digit' });
        let time = date.toLocaleTimeString([], {timeZone:"Australia/Melbourne",hour: '2-digit', minute: '2-digit' });
        let currentDatetime = [dayName, day, month, time]
        return currentDatetime.join(" ")
    }

    return (
        <div className="summery">
            <img src={getIcon(props.comment)} className="overview-icon" alt='overview icon' />
            <div className="overview">
                <div> <MdLocationOn/> Clayton, Victoria</div>
                <div className="date-time mt-2">{getDateTime()}</div>
                <div className="temperature mt-1">{props.temperature}°C</div>
                <div className="description mt-3">{props.comment}</div>
            </div>
        </div>
    )
}
