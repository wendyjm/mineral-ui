---
title: Getting Started
updated: "2017-07-06T22:12:03.284Z"
path: "/getting-started/"
---

# Getting Started

Mineral UI is distributed as a multitude of [npm packages](https://www.npmjs.com/search?q=@mineral-ui). E.g., to install the Hello and World packages:

1. Install project [peer dependencies](./docs/peer-dependencies.md)

  ```sh
  npm install --save @mineral-ui/component-utils glamorous glamor
  ```

2. Install the Mineral UI packages that you wish to use

  ```sh
  npm install --save @mineral-ui/hello @mineral-ui/world
  ```

3. Then, in your app, import and use just like any other React component

  _ES2015_

  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { ThemeProvider } from '@mineral-ui/component-utils';
  import Hello from '@mineral-ui/hello';
  import World from '@mineral-ui/world';

  const App = () => (
    <div>
      <Hello /> <World />
    </div>
  );

  ReactDOM.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
    document.getElementById('app')
  );
  ```
