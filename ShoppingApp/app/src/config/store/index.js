import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './ApplicationReducers';

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
