import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export function Header(){
    return(
        <>
        <Navbar variant="dark" className='shadow color-nav'>
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    src="/cloudy.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Forecaster
                </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/weekly">Week</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}
