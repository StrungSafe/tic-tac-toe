import { Container, Row, Col } from "react-bootstrap";
 
 function Address({ setAddress }) {
    return (
        <Container>
            <Row>
                <Col>
                    Create a new address or import an existing address using the private key WIF.
                </Col>
            </Row>
            <Row>
                <Col>
                    Click here to create a new wallet
                </Col>
            </Row>
            <Row>
                <Col>
                    Import your private key WIF here
                </Col>
            </Row>
        </Container>
    );
}

export default Address;