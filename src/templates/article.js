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
    imageData: data.nodeArticle.relationships.field_media_image.relationships.field_media_image.localFile.publicURL,
    imageAlt: data.nodeArticle.relationships.field_media_image.field_media_image.alt,
  };

  return <ArticleComponent {...articleProps} />
}

export default ArticleTemplate