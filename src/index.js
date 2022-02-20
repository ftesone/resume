import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import { Provider } from 'react-redux';
import I18n from 'redux-i18n';
import i18n from './app/i18n';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <I18n translations={i18n} initialLang={window.navigator?.language?.slice(0,2) || 'en'} fallbackLang="en">
                <App />
            </I18n>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
