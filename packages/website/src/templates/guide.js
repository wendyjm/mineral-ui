import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import SubNav from '../layouts/SubNav'

export default class GuidePageTemplate extends React.Component {
  render () {

    const guide = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${guide.frontmatter.title} | ${siteTitle}`} />
        <SubNav />
        <div dangerouslySetInnerHTML={{ __html: guide.html }} />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query GuidePageByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      id
      html
      frontmatter {
        title
        updated(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
