import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const logger = createLogger()
const middleware = [thunk, logger]
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(rootReducer, withDevTools(applyMiddleware(...middleware)))
