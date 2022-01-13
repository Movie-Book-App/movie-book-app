import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {AppState} from './Context/DataStorage';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppState>
                <App />
            </AppState>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

