import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaReact } from "react-icons/fa";

const Topbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="logo d-flex gap-2 align-items-center">
          <FaReact className="fs-4 text-primary" />
          TaskBook
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Topbar;
