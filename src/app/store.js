import {combineReducers, createStore} from 'redux';
import { i18nState } from 'redux-i18n';

const reducer = combineReducers({
    i18nState
});

const store = createStore(
    reducer,
    'development' === process.env.NODE_ENV
        && window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
