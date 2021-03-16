import { POSTS_LIST, DETAIL_LIST } from './constants'
import { api } from 'Config/apiConfig.js'
import axios from 'axios';

export function getPostsList(payload) {
    return {
        type: POSTS_LIST,
        payload
    };
}
export function getDetailsList(payload) {
    return {
        type: DETAIL_LIST,
        payload
    };
}

//Action dispatcher
export const getPostsListAsync = (offset, page) => {
    return (dispatch, getState) => {
        return axios.get(api.posts.GETPOST(offset, page),{'headers':{'Access-Control-Allow-Origin' : '*', 'crossDomain':true },
        proxy: {
            host: 'http://localhost',
            port: 3000
          }
    }
    ).then(
            response => {
                if (response && response.data && response.status === 200) {
                    return dispatch(getPostsList(response.data))
                }
            }
        ).catch(err => {
            throw err
        })
    }
}
export const getDetailsListAsync = (id) => {
    return (dispatch, getState) => {
        return axios.get(api.detail.GETDETAILS(id),{'headers':{'Access-Control-Allow-Origin' : '*', 'crossDomain':true },
        proxy: {
            host: 'http://localhost',
            port: 3000
          }
    }
    ).then(
            response => {
                if (response && response.data && response.status === 200) {
                    return dispatch(getDetailsList(response.data))
                }
            }
        ).catch(err => {
            throw err
        })
    }
}


