import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CamState from './context/CamState';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
ReactDOM.render(
  <CamState>
    <App />
  </CamState>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();