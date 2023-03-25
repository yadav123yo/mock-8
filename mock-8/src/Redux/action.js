import * as types from './actionType'
import axios from 'axios'

export const loginDetails = payload => dispatch =>  {

    dispatch({type : types.LOGIN_REQUEST})
    return axios 
    .post("https://reqres.in/api/login",payload)
    .then(res => {
        return dispatch({type : types.LOGIN_SUCCESS , payload : res.data})
    })
    .catch(error => {
        return dispatch({type: types.LOGIN_FAILURE})
    })
}
