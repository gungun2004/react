import React from "react";
import { Accordion } from "react-bootstrap";
import Ourinfo from "./Ourinfo";

function Accordions() {
  return (
    <div className="Accordianbg">
       <center> <h2>ABOUT COURSES</h2></center>
        <div></div>
    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Python</Accordion.Header>
        <Accordion.Body>
          Python is a popular, versatile programming language known for its simple syntax and readability. 
          It's widely used for web development, data science, artificial intelligence, and more.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Java</Accordion.Header>
        <Accordion.Body>
          Java is a robust, object-oriented language primarily used for building cross-platform applications. 
          It's a favorite for enterprise-level software and Android app development.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>JavaScript</Accordion.Header>
        <Accordion.Body>
          JavaScript is the backbone of dynamic web applications. It powers both the frontend and backend using frameworks like React, Angular, and Node.js.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>C++</Accordion.Header>
        <Accordion.Body>
          C++ is a powerful programming language commonly used in system/software development, game development, and performance-critical applications.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>React</Accordion.Header>
        <Accordion.Body>
          React is a JavaScript library developed by Facebook for building user interfaces. 
          It is known for its component-based architecture and efficient rendering using a virtual DOM.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>MERN</Accordion.Header>
        <Accordion.Body>
          MERN is a stack that combines MongoDB, Express.js, React, and Node.js for building full-stack web applications. 
          It provides a seamless environment for both frontend and backend development with JavaScript.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Full Stack Development</Accordion.Header>
        <Accordion.Body>
          Full Stack Development involves working on both frontend and backend technologies to create complete web applications. 
          It often uses stacks like MERN, MEAN, or Django + React to build efficient and scalable projects.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Accordions;
