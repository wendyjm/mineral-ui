import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Page2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Components</h1>
        <p>Would it be a good idea to have versions of several (or all) the components rendered here so the designer types can have an at-a-glance overview of what we've built</p>
        <p>Having just a list of components seems boring <a target="_blank" href="https://atlaskit.atlassian.com/components">Atlas Kit Components</a></p>
      </div>
    )
  }
}
