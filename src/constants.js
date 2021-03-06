// @flow
import type { Dependencies } from './types';

export const importPattern = `(?:import [^"']+|export {[^}]+}) from ["']([^"']+)["']`;

export const baseFiles = {
  'index.html': {
    content: '<div id="root"></div>',
  },
  'index.js': {
    content: `/**
  This CodeSandbox has been automatically generated using
  \`react-codesandboxer\`. If you're curious how that happened, you can
  check out our docs here: https://github.com/noviny/react-codesandboxer

  If you experience any struggles with this sandbox, please raise an issue
  on github. :)
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Example from './example';

ReactDOM.render(
<Example />,
document.getElementById('root')
);`,
  },
};

export const newpkgJSON = (
  dependencies: Dependencies,
  name?: string = 'react-codesandboxer-example',
) => `{
  "name": "${name}",
  "version": "0.0.0",
  "description": "A simple example deployed using react-codesandboxer",
  "main": "index.js",
  "dependencies": {
    ${Object.keys(dependencies)
      .map(k => `"${k}": "${dependencies[k]}"`)
      .join(',\n    ')}
  }
}`;
