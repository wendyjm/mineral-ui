import React from 'react';

import SubNav from './SubNav';

export default function ComponentPage ({currentPath}) {
  return (
    <div>
      <SubNav />
      ComponentPage {currentPath}
    </div>
  )
}
