import React from "react"
import PropTypes from "prop-types"
import Layout from "./layout"
import Seo from "./seo"
import "./styles.css"

const ArticleComponent = ({ title, body, imageData, imageAlt }) => {
  
  return (
    <>
      <Layout>
        <Seo title="Article" />
        <img src={imageData} alt={imageAlt} className="article-hero" />
        <div className="container">
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
  imageData: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
}

export default ArticleComponent