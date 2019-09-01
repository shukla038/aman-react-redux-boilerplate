import { combineReducers } from 'redux'
import globalReducer from 'Container/App/reducer';
import homeReducer from 'Container/HomePage/reducer';
import postDetailReducer from 'Container/PostsDetailPage/reducer';
import { connectRouter } from 'connected-react-router';
import history from 'Utils/history';


export default function rootReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        global:globalReducer,
        router: connectRouter(history),
        postListData:homeReducer,
        filteredPostListData:postDetailReducer,
        ...injectedReducers
    })
    return rootReducer
}
