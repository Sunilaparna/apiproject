import { Outlet,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

 function Layout(){
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img 
            alt=""
            src="/"
            width=''
            height=''
            />
            BURGER STORE

          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Aboutus">ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/Services">SERVICES</Nav.Link>
            <Nav.Link as={Link} to="/Menu">OUR MENU</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet></Outlet>
        </>
    )
 }
   
 export default Layout;

