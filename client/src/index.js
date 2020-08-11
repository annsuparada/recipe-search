import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from "./store/reducers/index";
import 'antd/dist/antd.css';
import './styles/global.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(reducer, applyMiddleware(thunk,logger));

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


setTimeout(function() { localStorage.clear() }, (300000));
setTimeout(function() { localStorage.clear() }, (600000));
setTimeout(function() { localStorage.clear() }, (900000));
setTimeout(function() { localStorage.clear() }, (1000000));