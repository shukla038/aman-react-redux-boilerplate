import { combineReducers } from 'react-redux'
import globalReducer from 'containers/App/reducer';

export default function rootReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        globalReducer,
        ...injectedReducers
    })
    return rootReducer
}