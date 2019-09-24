import * as jwt from 'jwt-decode'
import {loginUser, signupUser} from '../../service/auth';
import api from '../../service/api';
import {loading} from '../loading/LoadingAction';

export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';

export const login = ({email, password}) => {
    return (dispatch) => {
        loginUser({email, password}).then((response) => {
            const {token, isAdmin} = response.data;
            localStorage.setItem('token', token);
            api.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
            dispatch(setAuthentication(true));
            dispatch(setCurrentUser({email, token, isAdmin}));
            dispatch(loading(false));
        }).catch((error) => {
            console.log(error);
        });
    };
};

export const signup = ({email, password}) => {
    return (dispatch) => {
        dispatch(loading(true));
        signupUser({email, password}).then((response) => {
            const {token, isAdmin} = response.data;
            localStorage.setItem('token', token);
            api.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
            dispatch(setCurrentUser({email, token, isAdmin}));
            dispatch(setAuthentication(true));
            dispatch(loading(false));
            // history.push('/home')
        }).catch((error) => {
            console.log(error);
        });
    };
};

export const setAuthentication = (isAuthenticated) => {
    return {
        type: IS_AUTHENTICATED,
        payload: {
            authenticated: isAuthenticated
        }
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type:LOGOUT_USER
    }
};

export const setCurrentUser = ({email, token, isAdmin}) => {
    return (dispatch) => {
        const decoded = jwt(token);
        dispatch({
            type: SET_CURRENT_USER,
            payload: {
                email, token, id: decoded.id, isAdmin
            }
        })
    }
};

export const getAuthenticatedState = state => {
    return state.authReducer.authenticated;
};

export const getAdminState = state => {
    return state.authReducer.isAdmin;
};