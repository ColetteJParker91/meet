import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import * as atatus from 'atatus-spa';
atatus.config('dd8911c327d14944980ba8e06b41e122').install();

const container = document.getElementById('root');
const root = createRoot (container);
root.render(<App tab="home" />);

atatus.notify(new Error('Test Atatus Setup'));
