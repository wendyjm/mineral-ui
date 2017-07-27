import React from 'react';
import _Link from 'gatsby-link';
import {createStyledComponent} from '@mineral-ui/component-utils'

export default function TopLevelNav ({currentPath}) {

  const Nav = createStyledComponent('nav', {
    display: 'inline-flex',
    alignItems: 'center',
    height: 100
  });

  const Link = createStyledComponent(_Link, (props, theme) => {
    return {
      marginRight: theme.spacing_single,
      textDecoration: 'none',
      textTransform: 'uppercase',
      height: '100%',
      paddingTop: '3em',
      color: theme.color_gray_50,
      borderBottom: `5px solid ${props.active ? theme.color_gray_80 : 'transparent'}`
    }
  });

  const menu = {
    '/getting-started/': 'Getting Started',
    '/guidelines/approach': 'Guidelines',
    '/components/': 'Components',
    '/theming/': 'Theming',
    '/whats-new/': 'What\'s New',
    '/resources/': 'Resources'
  };

  return (
    <Nav>
      {
        Object.keys(menu).map(path => {
          return <Link
            key={path}
            active={path === currentPath}
            to={path}>
            {menu[path]}
          </Link>
        })
      }
    </Nav>
  )
}
