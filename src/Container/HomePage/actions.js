import { POSTS_LIST } from './constants'
import { api } from 'Config/apiConfig.js'
import axios from 'axios';

export function getPostsList(payload) {
    return {
        type: POSTS_LIST,
        payload
    };
}

//Action dispatcher
export const getPostsListAsync = () => {
    return (dispatch, getState) => {
        return axios.get(api.posts.GETPOST,{'headers':{'Access-Control-Allow-Origin' : '*', 'crossDomain':true },
        proxy: {
            host: 'http://localhost',
            port: 3000
          }
    }
    ).then(
            response => {
                debugger
                if (response && response.data && response.status === 200) {
                    dispatch(getPostsList(response.data))
                }
            }
        ).catch(err => {
            throw err
        })
    }
}

