import React from 'react';
import Link from 'gatsby-link';

export default function TopLevelNav ({pages}) {

  const style = {textDecoration: 'none', marginRight: '1rem'}

  return (
    <div>
      <Link style={style} to="/getting-started/">Getting Started</Link>
      <Link style={style} to="/guidelines/">Guidelines</Link>
      <Link style={style} to="/components/">Components</Link>
      <Link style={style} to="/theming">Theming</Link>
      <Link style={style} to="/whats-new/">What's New</Link>
      <Link style={style} to="/resources/">Resources</Link>
    </div>
  )
}
