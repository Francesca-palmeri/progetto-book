import { Component } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import fantasyBooks from "../data/fantasy.json"
import '../assets/css/AllTheBooks.css'

class AllTheBooks extends Component {
  render() {
    return (
      <Container >
        <Row className=" justify-content-center">
          {fantasyBooks.map((book) => {
            return (
              <Col className="g-4" sm={12} md={6} lg={4} xl={3} key={book.asin} >
                <Card className="Cards border border-black " style={{height: "100%"}} >
                  <Card.Img variant="top" src={book.img} style={{ width: "100%" }} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{book.category}</Card.Subtitle>
                    <Card.Text>€{book.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default AllTheBooks
