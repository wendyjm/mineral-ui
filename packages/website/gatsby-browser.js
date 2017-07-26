import React from 'react';
import {ThemeProvider} from '@mineral-ui/component-utils';

exports.wrapRootComponent = ({Root}) => {
  return () => (
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  )
}
