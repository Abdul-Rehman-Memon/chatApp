import { Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container fluid id="bg" className="d-flex justify-content-center">
      <Container id="container">
        <Row>
          <Col xs={1} style={{ height: "80" }} className="border-right">
            hello world
          </Col>
          <Col xs={4} style={{ height: "80%" }} className="border-right">
            hello world
          </Col>
          <Col xs={7} style={{ height: "80%" }}>
            hello world
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
