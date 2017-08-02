import React from 'react';
import {ThemeProvider} from '@mineral-ui/component-utils';

module.exports.wrapRootComponent = ({Root}) => {
  return () => {
    return React.createElement(ThemeProvider, null, React.createElement(Root, null))
  }
}
