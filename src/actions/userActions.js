import axios from 'axios';
import CONFIGURATION from '../configuration';
import { REGISTER_PENDING , REGISTER_REJECTED, REGISTER_FULFILLED} from '../constants/ActionTypes';
import promise from 'redux-promise-middleware';
const api_endpoint = CONFIGURATION.api_endpoint;


export function registerAccount(registerFormData){
    console.log(registerFormData,api_endpoint);
    return function (dispatch){
        axios({
            method: 'post',
            url: api_endpoint+'auth/signup',
            data: registerFormData,
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(function (response) {
            dispatch({type: REGISTER_FULFILLED, payload: response.data });
        })
        .catch(function (error) {
            dispatch({type: REGISTER_REJECTED, payload: error });
        });
    };
}