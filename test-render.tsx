import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
try {
  console.log(renderToString(<App />).substring(0, 50));
} catch(e) {
  console.error(e);
}
