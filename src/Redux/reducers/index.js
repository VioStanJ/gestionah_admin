import Auth from './auth';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    auth : Auth,
});

export default allReducers;