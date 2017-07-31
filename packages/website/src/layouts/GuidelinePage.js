import React from 'react';
import {createStyledComponent} from '@mineral-ui/component-utils';
import SubNav from './SubNav';
import Header from './Header';

const Container = createStyledComponent('div', {
  display: 'flex',
  margin: '0 auto',
  maxWidth: '90rem',
})

const Content = createStyledComponent('div', {
  flex: '1 1 auto',
  backgroundColor: 'lightgrey',
  padding: '6rem 3.5rem 6rem 10rem'
})

export default function GuidelinePage ({currentPath, children}) {
  return (
    <div>
      <Header currentPath={currentPath} />
      <Container>
        <SubNav />
        <Content>{children}</Content>
      </Container>
    </div>
  )
}
