import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reminderReducer from './reminder/reducer'
import userReducer from "./user/reducer";

const store = createStore(combineReducers({
    userReducer: userReducer,
    reminderReducer: reminderReducer
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
