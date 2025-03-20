import { height } from 'dom-helpers';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Routes,Route,Link } from 'react-router-dom';

function Navigations() {
  
    return ( 
      <Navbar expand="lg" className="navs">
        <Container fluid>
          <img src='https://th.bing.com/th/id/OIP.9Mpq2-41znxyYTL-4jb_UAHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7' width='50' height={50}></img>
          <Navbar.Brand ><Link to="/" className="navbar-brand"></Link> <h2><b>SOFTECH INFOWAYS</b></h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
         <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              <Link to='/' className="custom-link"><b>🏠HOME</b></Link>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              <Link to='/Courses' className="custom-link"><b>📚COURSES</b></Link>
             &ensp;&ensp;&ensp;&ensp;
              <Link to='/Login' className="custom-link"><b>🖥️LOGIN</b></Link>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
  
              {/* <Link to='/Aboutus'className="custom-link"><b>ABOUT US</b></Link> */}
            
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="🔍Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary"><b>Search</b></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
export default Navigations;