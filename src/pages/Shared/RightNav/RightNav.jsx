import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4 className="my-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle className="text-primary"/> Login With Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login With Github
      </Button>
      <div>
        <h4 className="my-4">Find Us On</h4>
        <ListGroup className="mb-4">
          <ListGroup.Item><FaFacebook className="text-primary"/>    Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter className="text-primary"/>    Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram className="text-danger"/>    Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="mt-4 position-relative">
        <img className="w-100" src={bg} alt="" />
        <div className="text-center p-5 position-absolute top-0 start-0 text-white mt-5">
            <h3 className="fw-bold my-3 lh-base">Create an Amazing Newspaper</h3>
            <p className="my-3 lh-base">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <Button className="p-3 fw-bold" variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
