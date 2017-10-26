import axios from 'axios';
import CONFIGURATION from '../configuration';
import { REGISTER_PENDING , REGISTER_REJECTED, REGISTER_FULFILLED} from '../constants/ActionTypes';
import promise from 'redux-promise-middleware';
const api_endpoint = CONFIGURATION.api_endpoint;


export function registerAccount(registerFormData){
    return function (dispatch){
        axios.post(api_endpoint+'/signup', {
            email: 'angelyukyu+23@gmail.com',
            password: 'fakepassword'
        })
        .then(function (response) {
            dispatch({type: REGISTER_FULFILLED, payload: response.data });
        })
        .catch(function (error) {
            dispatch({type: REGISTER_REJECTED, payload: error });
        });
    }
}