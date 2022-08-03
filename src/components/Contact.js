import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
  return (
    <div>

      <Container>
        <Row class="row">
          <Col>
            <h1>Contact Us</h1>
            <br></br>
            <p>Global Headquarters
              <br></br>
              <br></br>
              2390 STREET COLLEGE BLVD, SUITE 522,
              <br></br>
              SANTO CLARA, CA 29385 USA</p>
            <p>US : +1 423 623 3000</p>
            <p>TECH SUPPORT : +1 899 423 6829, +1-412-963-4720</p>
            <p>Email: info@email.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Contact;
