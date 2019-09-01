import { POSTS_LIST } from './constants';

export const initialState = {
    loading: false,
    postData:[]
};
function homeReducer(state = initialState, action) {
    switch (action.type) {
      case POSTS_LIST: {
        const newState = {
          ...state,
          loading: true,
          postData: action.payload
          
        };
  
        return newState;
      }
      default:
        return state;
    }
  }
export default homeReducer;
