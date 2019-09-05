import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './Container/App';
import { ConnectedRouter } from 'connected-react-router';
import {Provider} from 'react-redux'
import consfigureStore from './configureStore'
import * as serviceWorker from './serviceWorker';
import history from 'Utils/history';

const initialState = {};
const store = consfigureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');
console.log('sdfjhg', process.env.PUBLIC_URL)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>
, MOUNT_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
