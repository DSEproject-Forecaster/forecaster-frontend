import React from 'react'
import '../css/carouselCard.css'
import { WiSandstorm, WiHumidity, WiCloudy, WiSolarEclipse } from "react-icons/wi";

function CarouselCard() {
    return (
        <div className='carousel-container'>
            <div className='carousel-title'>00:00</div>
            <div>
                <img src='./icons/02d.png' className="carousel-icon" alt='overview icon' />
            </div>
            <div className='carousel-temperature'>27°</div>

            <div className='carousel-parameter'><WiSandstorm /> 45kMph</div>
            <div className='carousel-parameter'><WiHumidity /> 35%</div>
            <div className='carousel-parameter'><WiCloudy /> 50%</div>
            <div className='carousel-parameter'><WiSolarEclipse />45% / 50%</div>
        </div>
    )
}

export default CarouselCard