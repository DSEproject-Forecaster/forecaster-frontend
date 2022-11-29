import React from 'react'

export function OverviewSubComponent(props) {
    return (
        <div className="feature">
            <div className="feature-title">{props.name}</div>
            <div className="feature-value">{props.value}<span className='feature-unit'>{props.unit}</span></div>
        </div>
    )
}
