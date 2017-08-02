import React from 'react'
import {createStyledComponent} from '@mineral-ui/component-utils';
import Link from 'gatsby-link';

const Nav = createStyledComponent('nav', {
  flex: '0 0 18rem'
})

export default function SubNav () {

  const style = {listStyle: 'none', marginRight: '1rem'}
  return (
    <Nav>
      <li style={style}><Link to="#">Such wow</Link></li>
      <li style={style}><Link to="#">So Internet</Link></li>
      <li style={style}><Link to="#">Much tubes</Link></li>
    </Nav>
  )
}
