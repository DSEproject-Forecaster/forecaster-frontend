import React from 'react'
import { Link } from 'react-router-dom'

import '../css/nav.css'

function NavBar() {
    return (
        <div className='navigation'>

            <h1>Navbar title</h1>
            <div className='navigation-menu'>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home">Daily</Link></li>
                    <li><Link to="/home">Weekly</Link></li>


                </ul>
            </div>

        </div>
    )
}

export default NavBar