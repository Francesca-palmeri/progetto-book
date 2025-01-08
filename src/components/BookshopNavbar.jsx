import { Container, Navbar, Nav } from 'react-bootstrap'

const BookshopNavbar = function () {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
        <Container fluid={true}>
          <Navbar.Brand href="#">Bookshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  
  export default BookshopNavbar