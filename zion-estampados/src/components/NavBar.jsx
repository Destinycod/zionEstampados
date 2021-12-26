import { Link } from 'react-bootstrap/lib/Navbar';
import Navbar from 'react-bootstrap/Navbar'

function NavBar(){
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link>Uno</Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
export default NavBar;