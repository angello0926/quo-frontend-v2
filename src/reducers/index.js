import { combineReducers } from 'redux';

import { registerAccount , authenticateUser} from './userReducer';

export default combineReducers ({
    registerAccount, authenticateUser
});
