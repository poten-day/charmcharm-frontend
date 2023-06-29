import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = await import('./mocks/browser.ts');
//   worker.start({ onUnhandledRequest: 'bypass' });
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
