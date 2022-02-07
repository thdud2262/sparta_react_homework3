import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/configureStore";
import { Provider } from "react-redux";


import './index.css';
import App from './shared/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
