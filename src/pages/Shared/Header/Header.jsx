import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {


  return (
    <Container>
      <div className="text-center mt-4">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex my-2">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50} className="text-danger">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      {/* navbar */}

      
    </Container>
  );
};

export default Header;
