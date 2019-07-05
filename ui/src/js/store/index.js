import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import mainReducer from '../reducers'
import camelMiddleware from 'redux-camel';

export const history = createHistory()

export default createStore(mainReducer, applyMiddleware(thunkMiddleware, createLogger(), camelMiddleware()))
