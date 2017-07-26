import React from 'react';
import _Link from 'gatsby-link';
import {createStyledComponent} from '@mineral-ui/component-utils'

export default function TopLevelNav ({pages}) {

  const Link = createStyledComponent(_Link, (props, theme) => ({
    marginRight: theme.spacing_single
  }))

  return (
    <div>
      <Link to="/getting-started/">Getting Started</Link>
      <Link to="/guidelines/">Guidelines</Link>
      <Link to="/components/">Components</Link>
      <Link to="/theming">Theming</Link>
      <Link to="/whats-new/">What's New</Link>
      <Link to="/resources/">Resources</Link>
    </div>
  )
}
