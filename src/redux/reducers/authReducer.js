import * as actionTypes from "../actions/actionTypes";

const initState = {
    user: '',
    isAuthenticated: false,
    error: false,
    errorMessage: '',
}

const authReducer = (state = initState, action) => {
    switch (action.state) {
        case actionTypes.GET_LOGIN_SUCCESS:
            return {
                
                ...state,
                user: action.user,
                isAuthenticated: true,
                error: false,
                errorMessage: ''
            };
        case  actionTypes.GET_LOGIN_ERROR:
            return {
                ...state,
                user: '',
                error: true,
                isAuthenticated: false,
                errorMessage: action.error
            };
        case  actionTypes.GET_LOGOUT_SUCCESS:
            return {
                user: ''
            };
        default:
            return state;
    }
}

export default authReducer;