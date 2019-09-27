import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import '../node_modules/core-js/modules/es.array.includes';
import '../node_modules/core-js/modules/es.array.fill';
import '../node_modules/core-js/modules/es.string.includes';
import '../node_modules/core-js/modules/es.string.trim';
import '../node_modules/core-js/modules/es.object.values';

require('dotenv').config();


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
