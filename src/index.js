import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider } from 'react-redux'
import store from './redux/store.js'
import './index.css';
import App from './App';

//we wrap everyting in Provider so whole app has access to Store(global state)
//pass store to provider
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>
,document.getElementById('root'));

