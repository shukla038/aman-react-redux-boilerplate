import { FILTERED_POSTS_LIST, COMMENTS_LIST } from './constants'
import { api } from 'Config/apiConfig.js'
import axios from 'axios';

export function getPostsList(payload) {
    return {
      type: FILTERED_POSTS_LIST,
      payload
    };
}
export function getCommentsList(payload) {
    return {
      type: COMMENTS_LIST,
      payload
    };
}

//Action Creators
export const getPostsListAsync = (id) => {
    return (dispatch, getState) => {
        return axios.get(api.posts.POSTDETAIL(id)).then(
            response => {
                if(response && response.data && response.status === 200) {
                dispatch(getPostsList(response.data))
                }
            }
        ).catch( err => {
            throw err
        })
    } 
}
export const getCommentsListAsync = (id) => {
    return (dispatch, getState) => {
        return axios.get(api.posts.GETCOMMENTS(id)).then(
            response => {
                if(response && response.data && response.status === 200) {
                dispatch(getCommentsList(response.data))
                }
            }
        ).catch( err => {
            throw err
        })
    } 
}
export const deletePostAsync = (id, body) => {
    return (dispatch, getState) => {
        return axios.delete(api.posts.POSTDETAIL(id), body).then(
            response => {
                if(response && response.data && response.status === 200) {
                // dispatch(getPostsList(response.data))
                return response
                }
            }
        ).catch( err => {
            throw err
        })
    } 
}
export const editCommentAsync = (id, content) => {
    return (dispatch, getState) => {
        return axios.put(api.posts.POSTDETAIL(id),content).then(
            response => {
                if(response && response.data && response.status === 200) {
                // dispatch(getPostsList(response.data))
                return response
                }
            }
        ).catch( err => {
            throw err
        })
    } 
}


