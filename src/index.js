import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { loadState, saveState } from './localstorage';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';
import reducer from './reducers';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
const middleware = applyMiddleware(promise(), thunk ,createLogger());
const persistedState = loadState();
const store = createStore(reducer, middleware, persistedState);

console.log(store.getState());
store.subscribe(()=>{
    saveState (store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);

//store -> to dispatch action to reducer
//reducers detect action type and change state
//whenever store is updated 
// store.subscribe(()=>{
//     console.log("updated")
// })

//payload is the data 
//dispatch an action with type and payload