import { POSTS_LIST, ISSUES_LIST } from './constants'
import { api } from 'Config/apiConfig.js'
import axios from 'axios';

export function getRepoDetails(payload) {
    return {
        type: POSTS_LIST,
        payload
    };
}
export function getIssuesList(payload) {
    return {
        type: ISSUES_LIST,
        payload
    };
}

//Action dispatcher
export const getRepoDetailsAsync = (queryObj) => {
    return (dispatch, getState) => {
        return axios.get(api.repo.ISSUES_LIST(queryObj)).then(
            response => {
                if (response && response.data && response.status === 200) {
                    return dispatch(getRepoDetails(response.data))
                }
            }
        ).catch(err => {
            throw err
        })
    }
};
export const getAllIssuesAsync = () => {
    return(dispatch, getState) => {
        return axios.get(api.repo.GET_REPO_DETAILS).then(
            response => {
                if (response && response.data && response.status === 200) {
                    return dispatch(getIssuesList(response.data))
                }
            }
        ).catch(err => {
            throw err
        })
    }
}

