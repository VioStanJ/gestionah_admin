import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import allReducers from './Redux/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//LOCAL
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
localStorage.setItem('link_gest_adm','http://127.0.0.1:8000');

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
