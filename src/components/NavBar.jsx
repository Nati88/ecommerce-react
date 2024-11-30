import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from './CardWidget';
import styles from '../styles/NavBar.module.css';


function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary w-100" bg="dark" data-bs-theme="dark">
        <Container className={styles.ubication}>
            <Navbar.Brand href="#home">AMUEBLARTE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#link">Living</Nav.Link>
                    <Nav.Link href="#link">Cocina</Nav.Link>
                    <Nav.Link href="#link">Comedor</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <CardWidget/>
        </Container>
        </Navbar>
    );
}

export default NavBar;