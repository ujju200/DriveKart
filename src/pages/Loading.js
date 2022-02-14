import React from "react";
import ReactLoading from "react-loading";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";

class Loading extends React.Component {
  render() {
    return (
      <div>
        <h2
          style={{
            marginTop: "100px",
            marginLeft: "500px",
            color: "#0000FF",
            marginBottom: "50px",
          }}
        >
          Loading Please Wait :)
        </h2>
        <Container>
          <Row className="justify-content-md-center">
            <ReactLoading
              type="spinningBubbles"
              color="#0000FF"
              height={200}
              width={200}
              marginTop="200px"
              marginLeft="500px"
            />
          </Row>{" "}
        </Container>
      </div>
    );
  }
}
export default Loading;
