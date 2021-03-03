import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



function Hero() {

    return(
        // <p>Hero Works!</p>
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                    <h2>Meredith Jones</h2>
                    </Col>
                </Row>
            </Container>

        </Jumbotron>
    );
}

export default Hero;