import React from 'react';
import {createStyledComponent} from '@mineral-ui/component-utils';
import TopLevelNav from './TopLevelNav';
import _Link from 'gatsby-link';

const headerStyles = (props, theme) => ({
    display: 'flex',
    padding: '0 2em',
    justifyContent: 'space-between'
});

const Container = createStyledComponent('header', headerStyles)
const Logo = createStyledComponent(_Link, (props, theme) => ({
  // TODO figure out glamorous media queries for mobile
  display: 'inline-flex',
  alignItems: 'center',
  height: 100,
  textDecoration: 'none',
  letterSpacing: '-0.2em',

  '& > :first-child': {
    display: 'block',
    marginRight: 20,
    borderRadius: 40,
    width: 80,
    height: 80,
    backgroundImage: 'url(http://www.treasuremountainmining.com/image/Wulfenite.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  '& > :last-child': {
    color: 'black',
    fontSize: theme.size_medium,
    fontWeight: theme.fontWeight_bold
  }
}));

export default function Header ({currentPath}) {
  return (
    <Container>
      <Logo to="/">
        <span></span>
        <span>Mineral UI</span>
      </Logo>
      <TopLevelNav currentPath={currentPath} />
    </Container>
  )
}
