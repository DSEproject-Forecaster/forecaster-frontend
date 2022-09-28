import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='menu'>
            <Link to="home">Home</Link>
            <Link to="weekly">Weekly</Link>
            <Link to="annually">Annually</Link>
        </div>
    )
}

export default Nav