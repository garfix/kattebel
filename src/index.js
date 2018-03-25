import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import memoryReducer from './memory/reducer'

const store = createStore(combineReducers({
    memoryReducer
}));

store.subscribe(() => {
    console.log('store changed', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
