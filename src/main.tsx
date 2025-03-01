import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 開発環境でのみMSWを有効化
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}); 