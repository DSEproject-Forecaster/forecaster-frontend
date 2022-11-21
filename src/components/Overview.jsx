import React from 'react'
import '../css/overview.css'

function Overview() {
    return (
        <div className='container-overview'>
            <div className="summery">
                <img src='./icons/01d.png' className="overview-icon" alt='overview icon' />
                <div className="overview">
                    <div className="date-time">Sat 24 Sep 22:43</div>
                    <div className="temperature">27°</div>
                    <div className="description">Sunny</div>
                </div>
            </div>

            <div className="feature-values">
                <div className="feature">
                    <div className="feature-title">DewPoint</div>
                    <div className="feature-value">35°</div>
                    <div className="feature-description">sweltering</div>
                </div>
                <div className="feature">
                    <div className="feature-title">Wind</div>
                    <div className="feature-value">50</div>
                    <div className="feature-description">Stroam</div>
                </div>
                <div className="feature">
                    <div className="feature-title">Humidity</div>
                    <div className="feature-value">45%</div>
                    <div className="feature-description">sweltering</div>
                </div>
                <div className="feature">
                    <div className="feature-title">Cloud cover</div>
                    <div className="feature-value">70%</div>
                    <div className="feature-description">cloudy</div>
                </div>
                <div className="feature">
                    <div className="feature-title">Radiation</div>
                    <div className="feature-value">12 / 65</div>
                    <div className="feature-description">danger</div>
                </div>
                <div className="feature">
                    <div className="feature-title">Pressure</div>
                    <div className="feature-value">105</div>
                    <div className="feature-description">kPa</div>
                </div>

            </div>


        </div>
    )
}

export default Overview