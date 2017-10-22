import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App';
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <AppContainer />,
    document.getElementById('app')
);