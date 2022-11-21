import React from 'react'

export function OverviewSummary(props){

    const getDateTime = () => {
        const date = new Date();
        let dayName = date.toLocaleString('en-us', {weekday:'short'})
        let month = date.toLocaleString('en-us', { month: 'short' });
        let day = date.getDate();
        let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        let currentDatetime = [dayName, day, month, time]
        return currentDatetime.join(" ")
    }

    return (
        <div className="summery">
            {/* TODO: Change icon according to data */}
            <img src='./icons/01d.png' className="overview-icon" alt='overview icon' />
            <div className="overview">
                <div className="date-time">{getDateTime()}</div>
                <div className="temperature mt-1">{props.temp}°</div>
                <div className="description mt-3">{props.comment}</div>
            </div>
        </div>
    )
}
