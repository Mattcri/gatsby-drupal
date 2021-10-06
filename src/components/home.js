import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { map } from "lodash"
import { Card, Col, Button, Row, Container, Badge } from "react-bootstrap"


const Home = (props) => {
  const { elements } = props
  // const image = getImage.elements.map(image => image.imageBase.images.fallback.src)
  return (
    <>
    {console.log(elements)}
    
      <Container>
        <Row className="justify-content-center">
          {map(elements, element => (
            <Col key={element.id} md={6} xl={4} className="my-3">
              <Card className="h-100">
                {/* <Card.Img variant="top" src={element.imageSrc} alt={element.imageAlt} /> */}
                <Img fluid={element.imageBase} alt={element.imageAlt} className="card-img" />
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