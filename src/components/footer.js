import React from "react";

const Footer = () => (
  <footer className="mt-5 py-3">
    <div className="container">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>

    </div>
  </footer>
)

export default Footer