import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut =()=> {
        logOut()
        .then()
        .catch(error => console.log(error));
  }

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/category/0">Home</Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {user && <FaUserCircle className="fs-2"></FaUserCircle>}

              {user ? 
               
                    <Button onClick={handelLogOut} variant="secondary" className="fw-semibold px-3">
                  Log Out
                </Button>
              
               : 
                <Link to="/login">
                  <Button variant="secondary" className="fw-semibold px-3">
                    Login
                  </Button>
                </Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
