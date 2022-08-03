import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './products.css';

const Products = () => {
  return (
    <div>
      <Container>
        <Row class="row">
          <Col>
            <Card class="card" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YMQ2v3Bpd3uhsSBLxAJVwwHaHa%26pid%3DApi&f=1" />
              <Card.Body>
                <Card.Title>AirPods - €199,-</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.3V9BiJRoqbZ3xa4X8z8IBAHaHa%26pid%3DApi&f=1" />
              <Card.Body>
                <Card.Title>iMac - €1.449,-</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/54/e0/d5/54e0d544d785d079ec4d9ecef235b160.jpg" />
              <Card.Body>
                <Card.Title>MacBook - €1.619,-</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  )
};

export default Products;
