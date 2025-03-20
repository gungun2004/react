import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

function Ourinfo() {
  return (
    <div className="mt-5 bg-info">
      <Row className="g-4">
        {/* Our Mission */}
        <Col md={4} sm={6}>
          <Card className="h-100 text-center bg-secondary text-white">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                We strive to inspire, educate, and equip the next generation of innovators and leaders with top-notch education and values.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Our Faculty */}
        <Col md={4} sm={6}>
          <Card className="h-100 text-center bg-secondary text-white">
            <Card.Body>
              <Card.Title>Our Faculty</Card.Title>
              <Card.Text>
                Our dedicated and accomplished faculty are committed to mentoring students and guiding them toward achieving excellence.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Our Alumni */}
        <Col md={4} sm={6}>
          <Card className="h-100 text-center bg-secondary text-white">
            <Card.Body>
              <Card.Title>Our Alumni</Card.Title>
              <Card.Text>
                Our alumni network is a vibrant community of successful individuals making a global impact in their respective fields.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Additional Card Example */}
        <Col md={4} sm={6}>
          <Card className="h-100 text-center bg-secondary text-white">
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To empower individuals with knowledge and skills to make the world a better place through innovation and collaboration.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Techniques of Learning */}
        <Col md={4} sm={6}>
          <Card className="h-100 text-center bg-secondary text-white">
            <Card.Body>
              <Card.Title>Techniques of Learning</Card.Title>
              <Card.Text>
                Explore strategies like active learning, spaced repetition, and hands-on practice to enhance understanding and long-term retention.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Career Counselling */}
        <Col md={4} sm={6}>
          <Card className="h-100 text-center bg-secondary text-white">
            <Card.Body>
              <Card.Title>Career Counselling</Card.Title>
              <Card.Text>
                Our personalized career guidance helps you discover your strengths, set goals, and navigate your path to success with confidence.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br><br></br><br></br><br></br>
      </div>
  );
}

export default Ourinfo;
