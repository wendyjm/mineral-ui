import {createStyledComponent} from '@mineral-ui/component-utils'
import _Link from 'gatsby-link';
import React from 'react'
import Button from '@mineral-ui/button';
import Header from './Header';
import Footer from './Footer';

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
  top: '45%',
  left: '2rem',

  '& > button' : {
    marginRight: '1rem'
  }
})

const OneLiner = createStyledComponent('div', {
  color: 'white',
  fontSize: '3rem',
  marginBottom: '1rem',
  fontWeight: 100
})

const ElevatorPitch = createStyledComponent('div', {
  textAlign: 'center',
  fontSize: '2rem',
  color: 'lightgrey',
  fontWeight: 100,
  maxWidth: '50%',
  margin: '4rem auto'
})

const CoreValues = createStyledComponent('div', {
  width: '80%',
  margin: '3rem auto'
})

const Value = createStyledComponent('div', {
  marginTop: '5rem',
  marginBottom: '5rem',
  display: 'flex',
  '&:nth-child(even)': {
    flexDirection: 'row-reverse',
    textAlign: 'right'
  },
  '&:nth-child(even) > img': {
    marginLeft: '2rem'
  },
  '&:nth-child(odd) > img': {
    marginRight: '2rem'
  }
})

const ValueImage = createStyledComponent('img', {
  background: '#eee',
  width: 160,
  height: 160,
  flex: '0 0 160px'
})

const ValueContent = createStyledComponent('div', {
  flex: 1
})

const ValueCopy = createStyledComponent('p', {

})

const ValueHeader = createStyledComponent('h2', {
  fontWeight: 100,
  color: '#404040',
  fontSize: '3em',
  margin: 0
})

const Link = createStyledComponent(_Link, {
  color: '#222',
  fontSize: '.8em',
  cursor: 'pointer',
  '&:hover': {
    color: '#666'
  }
})

const GetStarted = createStyledComponent(_Link, {
  background: 'skyblue',
  color: 'white',
  padding: '1rem',
  fontSize: '1.5rem',
  margin: '10rem auto',
  display: 'block',
  maxWidth: 200,
  textAlign: 'center',
  textDecoration: 'none',
  cursor: 'pointer'
})

export default function HomePage () {
  return (
    <LayoutContainer>
      <Hero>
        <CallToAction>
          <OneLiner>
            One-liner mission statement for Mineral UI
          </OneLiner>
          <Button size="large" primary>Get Started</Button>
          <Button size="large">Docs</Button>
          <Link to="https://github.com/mineral-ui/mineral-ui">Follow us on GitHub</Link>
        </CallToAction>
      </Hero>
      <Header currentPath="/" />
      <ElevatorPitch>Our great design system is the solution to all your problems. Maybe even a second sentence here for the C-level types talking about vision and changing the way products are made</ElevatorPitch>
      <CoreValues>
        <Value>
          <ValueImage />
          <ValueContent>
            <ValueHeader>You do not talk about Fight Club</ValueHeader>
            <ValueCopy>Deploy Previews work by deploying every pull request from your git repository to a unique URL; completely different from the one your main site uses. You and your team can see how those changes look before they’re merged into the main branch and deployed to production.</ValueCopy>
          </ValueContent>
        </Value>
        <Value>
          <ValueImage />
          <ValueContent>
            <ValueHeader>You DO NOT talk about Fight Club</ValueHeader>
            <ValueCopy>Deploy Previews work by deploying every pull request from your git repository to a unique URL; completely different from the one your main site uses. You and your team can see how those changes look before they’re merged into the main branch and deployed to production.</ValueCopy>
          </ValueContent>
        </Value>
        <Value>
          <ValueImage />
          <ValueContent>
            <ValueHeader>If someone says "stop", goes limp or taps out...</ValueHeader>
            <ValueCopy>Deploy Previews work by deploying every pull request from your git repository to a unique URL; completely different from the one your main site uses. You and your team can see how those changes look before they’re merged into the main branch and deployed to production.</ValueCopy>
          </ValueContent>
        </Value>
        <Value>
          <ValueImage />
          <ValueContent>
            <ValueHeader>One fight at a time</ValueHeader>
            <ValueCopy>Deploy Previews work by deploying every pull request from your git repository to a unique URL; completely different from the one your main site uses. You and your team can see how those changes look before they’re merged into the main branch and deployed to production.</ValueCopy>
          </ValueContent>
        </Value>
      </CoreValues>
      <GetStarted>Get Started</GetStarted>
      <Footer />
    </LayoutContainer>
  )
}
