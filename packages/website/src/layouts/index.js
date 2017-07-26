import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import get from 'lodash/get'

import TopLevelNav from './TopLevelNav'
import SubNav from  './SubNav'

require('prismjs/themes/prism-okaidia.css')

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {

    console.log('layouts', this.props)

    // so apparently atm there is only one layout available,=
    // so you have to fork at the pathname and return a different layout
    // there is an open PR to add this functionality
    // https://github.com/gatsbyjs/gatsby/pull/1503

    return (
      <div>
        <Helmet
          title="Mineral UI"
          meta={[
            { name: "description", content: "A Component Library Built in React at the folks at CA Technologies" },
            { name: "keywords", content: "react, component, library, ui, javascript" },
          ]}
        />
        <div
          style={{
            background: `lightblue`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Mineral UI
              </Link>
            </h1>
            <TopLevelNav />
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}
