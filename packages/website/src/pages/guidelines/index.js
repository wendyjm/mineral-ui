import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

export default class GuideNav extends React.Component {
  render () {
    const guideLinks = []
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const guides = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <ul>
          {
            guides.map(guide => { // render links to all the pages
              const title = get(guide, 'node.frontmatter.title', 'Guide')
              return (
                <li key={guide.node.frontmatter.path}>
                  <Link to={guide.node.frontmatter.path}>
                    {title}
                  </Link>
                </li>
              )
            })
          }
          {/* TODO: figure out how to query regular pages */}
          <li>
            <Link to="/guidelines/color/">Color</Link>
          </li>
          <li>
            <Link to="/theming">Theming</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query GuideQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___updated], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
