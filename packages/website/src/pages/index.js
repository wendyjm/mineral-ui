import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default function Index ({data}) {
  const {edges: pages} = data.allSitePage
  return (
    <div>
      <h1>Mineral UI</h1>
      <p>This is the home page</p>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allSitePage {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`
