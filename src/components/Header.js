import React, {useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export function Header(){

    const [navState, setNavState] = useState(false);

    const toggleNav = () => {
        setNavState(!navState);
    }

    return(
        <Navbar color="dark" expand="md" dark>
            <div className="container">
                <NavbarToggler onClick={toggleNav} />
                {/* <NavbarBrand href="/"><img src='../../public/cloudy.png' height="40" width="40" alt='Forecaster' /></NavbarBrand> */}
                <Collapse isOpen={navState} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link"  to='/'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/dashboard'><span className="fa fa-home fa-lg"></span> Dashboard </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
}