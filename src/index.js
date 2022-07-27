import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('app');
const root = createRoot (container);
root.render(<App tab="home" />);

