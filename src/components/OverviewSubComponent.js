import React from 'react'

export function OverviewSubComponent(props) {
    return (
        <div className="feature">
            <div className="feature-title">{props.name}</div>
            <div className="feature-value">{props.value}</div>
            <div className="feature-description">{props.comment}</div>
        </div>
    )
}
