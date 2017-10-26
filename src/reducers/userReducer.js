import { AUTHENTICATE_PENDING, 
        AUTHENTICATE_FULFILLED, 
        AUTHENTICATE_REJECTED,
        REGISTER_PENDING,
        REGISTER_FULFILLED,
        REGISTER_REJECTED
    } from '../constants/ActionTypes';


const initialState = {
    fetching: true,
    loggedIn: false,
    user: {},
    token: null,
    error: null
};


export const registerAccount = (state = initialState , action) => {
    switch(action.type){
        case REGISTER_PENDING:
            return {...state, fetching: true};
        case REGISTER_FULFILLED:
            return {...state, fetching: false, 
                loggedIn: true, user: action.payload.user , 
                token: action.payload.token
            };
        case REGISTER_REJECTED: 
            return {...state, fetching: false, error: action.payload.error };
    }
    return state;
};


export const authenticateUser = (state = initialState , action) => {
    switch(action.type){
        case AUTHENTICATE_PENDING:
            return {...state, fetching: true};
        case AUTHENTICATE_FULFILLED:
            return {...state, fetching: false, 
                loggedIn: true, user: action.payload.user , 
                token: action.payload.token
            };
        case AUTHENTICATE_REJECTED: 
            return {...state, fetching: false, error: action.payload.error };
    }
    return state;
};


