import {IS_AUTHENTICATED, LOGIN_USER, LOGOUT_USER, SET_CURRENT_USER, SIGNUP_USER} from '../../action/auth/AuthAction';

const initialState = {
    isAdmin: false,
    authenticated: !!localStorage.getItem('token')
};

export const authReducer = (state = initialState, action) => {
    const {payload} = action;
    switch (action.type) {
        case SIGNUP_USER:
            return {
                ...state,
                authenticated: true,
            };
        case LOGIN_USER:
            return {
                ...state,
                authenticated: true,
            };
        case LOGOUT_USER:
            return {
                ...state,
                authenticated: false,
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                token: payload.token,
                id: payload.id,
                isAdmin: payload.isAdmin,
            };
        case IS_AUTHENTICATED:
            return {
                ...state,
                authenticated: payload.authenticated
            };
        default:
            return state;
    }
};