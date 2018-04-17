import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { addLocaleData, IntlProvider } from 'react-intl';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';

import reminderReducer from './reminder/reducer'
import userReducer from "./user/reducer";

const store = createStore(combineReducers({
    userReducer: userReducer,
    reminderReducer: reminderReducer
}));

store.subscribe(() => {
    console.log('store changed', store.getState());
});

let locale = "nl";

let frLocaleData = require('react-intl/locale-data/' + locale);
addLocaleData(frLocaleData);

let messages = {};

switch (locale) {
    case 'nl':
        messages = require("./lang/nl_NL");
        break;
    default:
        messages = [];
        break;

}

ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
        <Provider store={store}>
            <App />
        </Provider>
    </IntlProvider>,
    document.getElementById('root')
);

registerServiceWorker();
