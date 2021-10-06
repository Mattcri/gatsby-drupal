import React from "react"
import { graphql } from "gatsby"
import ArticleComponent from "../components/article"

export const query = graphql`
  query Article($articleId: String!) {
    nodeArticle(id: {eq: $articleId}) {
      body {
        processed
      }
      relationships {
        field_media_image {
          field_media_image {
            alt
          }
          relationships {
            field_media_image {
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      title
    }
  }
`;


const ArticleTemplate = ({data}) => {
  const articleProps = {
    title: data.nodeArticle.title,
    body: data.nodeArticle.body.processed,
    // imageData: data.nodeArticle.relationships.field_media_image.relationships.field_media_image.localFile.publicURL,
    imageAlt: data.nodeArticle.relationships.field_media_image.field_media_image.alt,
    imageSrc: data.nodeArticle.relationships.field_media_image.relationships.field_media_image.localFile.childImageSharp.fluid,
  };

  return <ArticleComponent {...articleProps} />
}

export default ArticleTemplate