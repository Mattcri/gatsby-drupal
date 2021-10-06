import React from "react"
import PropTypes from "prop-types"
import Layout from "./layout"
import Seo from "./seo"
import Img from "gatsby-image"
import "./styles.css"

const ArticleComponent = ({ title, body, imageSrc, imageAlt }) => {
  
  return (
    <>
      <Layout>
        <Seo title="Article" />
        <Img fluid={imageSrc} alt={imageAlt} className="article-hero" />
        <div className="container px-lg-5 mb-4 mb-lg-5">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{__html: body}} />
        </div>
      </Layout>
    </>
  )

}

ArticleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // imageData: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
}

export default ArticleComponent