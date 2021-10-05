import React from "react";

const Footer = () => (
  <footer className="mt-4 py-4">
    <div className="container">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>

    </div>
  </footer>
)

export default Footer