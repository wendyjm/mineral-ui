import React from 'react';
import {createStyledComponent} from '@mineral-ui/component-utils';
import SubNav from './SubNav';

const LayoutContainer = createStyledComponent('div', {

})

const Content = createStyledComponent('div', {

})

export default function GuidelinePage ({currentPath, children}) {
  return (
    <LayoutContainer>
      <SubNav />
      GuidelinePage!
      <Content>{children}</Content>
    </LayoutContainer>
  )
}
