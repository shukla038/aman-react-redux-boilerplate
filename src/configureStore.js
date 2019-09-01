import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default function consfigureStore (initialState = {}) {
    const enhancers = []
    let composeEnhancers = compose
  
    if (process.env.NODE_ENV === 'development') { // enable dev tools for dev evt
      if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      }
    }
    return createStore(rootReducer(), initialState,
    composeEnhancers(
        applyMiddleware(thunk)),
        ...enhancers
      )
}