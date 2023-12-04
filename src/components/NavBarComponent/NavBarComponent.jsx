import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Mi tienda de Pesca</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Productos</Nav.Link>
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Carrito</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Nosotros
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Registrate/Iniciar Sesion</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      🛒 0 
    </Container>
  </Navbar>
  )
}

export default NavBarComponent