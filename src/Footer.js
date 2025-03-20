import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Accordions from './Accordians';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div >
        <footer className="bg-secondary text-white py-4">
            <Container>
                <Row >
                    {/* About Us Section */}
                    <Col md={4} sm={12} className="mb-3">
                        <h5>About Us</h5>
                        <p>
                            We are serving more than 20 years in tech field and passionate about delivering
                            high-quality solutions to our students. Your satisfaction is our priority.
                        </p>
                    </Col>
                 {/* Quick Links Section */}
                 <Col md={4} sm={12} className="mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/' className="text-white text-decoration-none">Home</Link></li>
                            <li><Link to='/Aboutus' className="text-white text-decoration-none">About Us</Link></li>
                            <li><Link to="/Login" className="text-white text-decoration-none">Login</Link></li>
                            <li><Link to='/Courses'className="text-white text-decoration-none">Courses</Link></li>
                        </ul>
                    </Col>
                    {/* Social Media Section */}
                    <Col md={4} sm={12} className="mb-3">
                        <h5>Follow Us</h5>
                        <div>
                            <a href='https://www.geeksforgeeks.org/' className="text-white me-3">
                                <i className="bi bi-facebook"></i> Facebook
                            </a>
                            <a href="https://www.geeksforgeeks.org/" className="text-white">
                                <i className="bi bi-instagram"></i> Instagram
                            </a>
                        </div>
                    </Col>
                </Row>

                <Row className="text-center mt-4">
                    <Col>
                        <p>&copy;Softech Infoways. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
        </div>
    );
}

export default Footer;
