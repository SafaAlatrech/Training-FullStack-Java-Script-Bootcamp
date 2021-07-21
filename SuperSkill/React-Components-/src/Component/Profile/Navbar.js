import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import  {Navbar,Nav} from 'react-bootstrap';

function Navbars() {
    return (
      <div className="App" >
        <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Project</Nav.Link>
      </Nav>
      
  </Navbar>
      </div>
  );
}

export default Navbars;
