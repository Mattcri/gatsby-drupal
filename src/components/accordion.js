import React from "react"
import { Accordion } from "react-bootstrap"

const AccordionCp = () => (
  <Accordion className="mt-3 mb-4">
    <Accordion.Item eventKey="0">
      <Accordion.Header className="fw-bold">¿Que plugins se utilizaron?</Accordion.Header>
      <Accordion.Body>
        Para integrar Gatsby con Drupal se utilizo el plugin <a href="https://www.gatsbyjs.com/plugins/gatsby-source-drupal/">gatsby-source-drupal</a> compatible con Drupal 8 y 9.
        <br />
        <code>npm install gatsby-source-drupal</code> <br/>
        Se inicio el proyecto con el starter default de Gatsby y se integro con <a href="https://react-bootstrap.netlify.app/">React-Bootstrap5</a>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header className="fw-bold">¿Que información se esta consumiendo?</Accordion.Header>
      <Accordion.Body>
        La página esta consumiendo la información de un Drupal 9 creado en <a href="https://pantheon.io/">pantheonsite</a> instalado con la versión de demo Umami, habilitado con el modulo de JSON-API para poder generar la API con el contenido del sitio. <br/>
        Para modo de ejemplo de la página actual se ocupo los tipos de contenido de articles y generar una vista para cada uno.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
)

export default AccordionCp