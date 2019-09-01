import { FILTERED_POSTS_LIST, COMMENTS_LIST } from './constants';

export const initialState = {
    loading: false,
    postDetailData:[]
};
function postDetailReducer(state = initialState, action) {
    switch (action.type) {
      case FILTERED_POSTS_LIST: {
        const newState = {
          ...state,
          loading: true,
          postDetailData: action.payload
          
        };
  
        return newState;
      }
      case COMMENTS_LIST :{
        const newState = {
            ...state,
            loading: true,
            commentsData: action.payload
            
          };
    
          return newState;
      }
      default:
        return state;
    }
  }
export default postDetailReducer;
