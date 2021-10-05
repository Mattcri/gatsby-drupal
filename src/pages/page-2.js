import * as React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import AccordionCp from "../components/accordion"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Container> 
      <Seo title="Page two" />
      <h1 className="mt-4">Hi from the second page</h1>
      <AccordionCp />
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default SecondPage
