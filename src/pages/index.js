import * as React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Home from "../components/home"
import Seo from "../components/seo"

const IndexPage = (props) => {
  const {data} = props
  const queryData = data.allNodeArticle.nodes
  const dataProps = queryData.map(article => {
    let values = {
      title: article.title,
      id: article.id,
      path: article.path.alias,
      summary: article.body.summary,
      date: article.created,
      imageAlt: article.relationships.field_media_image.field_media_image.alt,
      imageSrc: article.relationships.field_media_image.relationships.field_media_image.localFile.publicURL,
    }
    return values
  })

  return (
    <>
      <Layout>
        <Seo title="Home" />
        <h3 className="px-3 mt-5 mb-4 text-center">¡Welcome! check all our articles</h3>
        {/* <pre>{JSON.stringify(dataProps, null, 2)}</pre> */}
        <Home elements={dataProps} />
      </Layout>
    </>
  )

}

IndexPage.propsTypes = {
  data: PropTypes.object.isRequired
}

export const queryHome = graphql`
    query Home {
    allNodeArticle(sort: {fields: id, order: DESC}) {
      nodes {
        title
        path {
          alias
        }
        body {
          summary
        }
        relationships {
          field_media_image {
            relationships {
              field_media_image {
                localFile {
                  publicURL
                }
              }
            }
            field_media_image {
              alt
            }
          }
        }
        id
        created
      }
    }
  }
`;

export default IndexPage
