import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import get from 'lodash/get'
import {createStyledComponent} from '@mineral-ui/component-utils'

import HomePage from './HomePage';
import GuidelinePage from './GuidelinePage';
import ComponentPage from './ComponentPage';
import Header from './Header';

require('prismjs/themes/prism-okaidia.css')
require('./global.css')

const LayoutContainer = createStyledComponent('div', (props, theme) => ({
  boxSizing: 'border-box',
  '& *,& *::before,& *::after': {
    boxSizing: 'inherit'
  },
  fontFamily: `${theme.fontFamily}, ${theme.fontFamily_system}`,
}))

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {

    // console.log('layouts', this.props)

    const {location: {pathname}} = this.props;

    // so apparently atm there is only one layout available,=
    // so you have to fork at the pathname and return a different layout
    // there is an open PR to add this functionality
    // https://github.com/gatsbyjs/gatsby/pull/1503
    //

    let content;
    if (pathname === '/') {
      content = <HomePage />;
    } else if (pathname.match('components')) {
      content = <ComponentPage currentPath={pathname} />
    } else { // a guideline page.
      content = <GuidelinePage>{this.props.children()}</GuidelinePage>;
    }

    return (
      <LayoutContainer>
        <Helmet
          title="Mineral UI"
          meta={[
            { name: "description", content: "A Component Library Built in React at the folks at CA Technologies" },
            { name: "keywords", content: "react, component, library, ui, javascript" },
          ]}
        >
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" />
        </Helmet>
        {content}
      </LayoutContainer>
    )
  }
}
