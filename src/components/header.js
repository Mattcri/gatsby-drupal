import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container, Nav, Navbar } from "react-bootstrap"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div 
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Container>
        <Navbar expand="lg"  variant="dark">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Navbar.Brand >
              {siteTitle}
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav as="ul" className="ml-auto align-items-md-center">
              <Nav.Item as="li" className="mx-md-2">
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                Home
                </Link> 
              </Nav.Item>
              <Nav.Item as="li" className="mx-md-2">
                <Link to="/page-2/" style={{ textDecoration: 'none', color: '#fff' }}>
                Page 2
                </Link> 
              </Nav.Item>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
