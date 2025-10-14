import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Imports the main App component
import './index.css'; // Imports our global styles and animations

// Uses ReactDOM to mount the App component to the HTML element with id="root"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)