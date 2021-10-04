import React from "react"
import Layout from "./layout"
import "./article.css"

const ArticleComponent = ({ title, body, imageData, imageAlt }) => {
  
  return (
    <>
      <Layout>
        <img src={imageData} alt={imageAlt} className="article-hero" />
        <div className="container"> 
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{__html: body}} />
        </div>

      </Layout>
    </>

  )

}


export default ArticleComponent