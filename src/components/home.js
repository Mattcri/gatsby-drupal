import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { map } from "lodash"
import { Card, Col, Button, Row, Container, Badge } from "react-bootstrap"


const Home = (props) => {
  const { elements } = props
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          {map(elements, element => (
            <Col key={element.id} md={6} lg={4} className="my-3">
              <Card className="h-100">
                <Card.Img variant="top" src={element.imageSrc} />
                <Card.Body className="position-relative pb-5">
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>
                    {element.summary}
                  </Card.Text>
                  <Link to={element.path}>
                    <Button className="btn-actions"> VER MÁS <Badge className="ms-1" bg="light">📎</Badge> </Button>
                  </Link>

                </Card.Body>
                <Card.Footer className="text-muted">Publicado: {element.date.substring(0, 10)}</Card.Footer>
              </Card>
              
            </Col>
          ))}
        </Row>
        
      </Container>
    </>
  )
  
}

Home.propTypes = {
  elements: PropTypes.array.isRequired
}

export default Home