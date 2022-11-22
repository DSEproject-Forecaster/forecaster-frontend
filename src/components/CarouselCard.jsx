import React from 'react';
import '../css/carouselCard.css';
import { WiSandstorm, WiHumidity, WiCloudy, WiSolarEclipse } from "react-icons/wi";
import { getIcon } from '../Utils/getIcon';

function CarouselCard(props) {
    return (
        <div className='carousel-container'>
            <div className='carousel-title'>{props.time}</div>
            <div>
                <img src={getIcon(props.comment)}   className="carousel-icon" alt='overview icon' /> 
            </div>
        <div className='carousel-temperature'>{props.temp}°</div>

            <div className='carousel-parameter'><WiSandstorm /> {props.windspeed} kmph</div>
            <div className='carousel-parameter'><WiHumidity /> {props.humidity}%</div>
            <div className='carousel-parameter'><WiCloudy /> {props.cloud}%</div>
            <div className='carousel-parameter'><WiSolarEclipse />{props.rad1}% / {props.rad2}%</div>
        </div>
    )
}

export default CarouselCard