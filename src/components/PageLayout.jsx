import Topbar from "./Topbar";
import { Container, Row, Col } from "react-bootstrap";

const PageLayout = (props) => {
  return (
    <div>
      <Topbar />
      <Container className="">
        <Row className="justify-content-center mt-4">
          <Col sm="10" md="8" lg="6" xl="5" className=" border-danger">
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageLayout;
