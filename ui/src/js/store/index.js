import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from "history";
import mainReducer from '../reducers'
import camelMiddleware from 'redux-camel';

export const history = createBrowserHistory()

export default createStore(mainReducer, applyMiddleware(thunkMiddleware, createLogger(), camelMiddleware()))
