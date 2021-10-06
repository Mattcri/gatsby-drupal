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
    <Accordion.Item eventKey="2">
      <Accordion.Header className="fw-bold">Problemas con gatsby-plugin-image y solución</Accordion.Header>
      <Accordion.Body>
        Para renderizar una imágen con las funcionalidades de optimización de carga realizadas por Gatsby, en ocasiones suele ocurrir un problema al cargar una imágen con gatsby-plugin-image. Ya que este plugin solo puede hacer render de imágenes que se encuentren en un ambiente local. Si estamos intentando utlizar un servicio externo para traer contenido puede surgir el siguiente error al pasar la data en <b>src</b> o <b>image</b> de StaticImage: <br/>
        <code>no data found for image undefined could not find values for the following props at build time src gatsby</code> <br/>
        La solución rápida para este problema es utilizar el plugin de <b>gatsby-image</b> que actualmente se encuentra deprecado, pero se puede seguir utilizando. <br/>
        <code>npm install --save gatsby-plugin-remote-images</code> <br/>
        La otra alternativa es realizar configuraciones extras para poder optimizar este problema. Para más información consultar la <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-remote-images/">siguiente documentación.</a>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
)

export default AccordionCp