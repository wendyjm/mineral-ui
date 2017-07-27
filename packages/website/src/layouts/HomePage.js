import {createStyledComponent} from '@mineral-ui/component-utils'
import Link from 'gatsby-link';
import React from 'react'
import Button from '@mineral-ui/button';
import Header from './Header';

const LayoutContainer = createStyledComponent('div', {

})

const Hero = createStyledComponent('div', {
  width: '100%',
  height: '30rem',
  background: 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
  position: 'relative'
}, {displayName: 'Hero'})

const CallToAction = createStyledComponent('div', {
  position: 'absolute',
  bottom: '1rem',
  left: '1rem'
})

const OneLiner = createStyledComponent('div', {

})

const ElevatorPitch = createStyledComponent('div', {

})

const CoreValues = createStyledComponent('div', {

})

const Value = createStyledComponent('div', {

})

export default function HomePage () {
  return (
    <LayoutContainer>
      <Hero>
        <CallToAction>
          <OneLiner>
            Short mission statement for Mineral UI
          </OneLiner>
          <Button>Get Started</Button>
          <Button>Docs</Button>
          <Link to="https://github.com/mineral-ui/mineral-ui">Follow us on GitHub</Link>
        </CallToAction>
      </Hero>
      <Header currentPath="/" />
      <ElevatorPitch>This is a longer sentence about how we're going to fix your problems. Maybe even a second sentence here for the C-level types talking about vision changing the way products are made</ElevatorPitch>
      <CoreValues>
        <Value></Value>
        <Value></Value>
        <Value></Value>
        <Value></Value>
      </CoreValues>
    </LayoutContainer>
  )
}
