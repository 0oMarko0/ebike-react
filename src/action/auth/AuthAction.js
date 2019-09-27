import * as jwt from 'jwt-decode'
import {loginUser, signupUser} from '../../service/auth';
import api from '../../service/api';
import {loading} from '../loading/LoadingAction';
import {Routes} from '../../utils/Routes';

export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';

export const login = ({email, password}, history) => {
    return (dispatch) => {
        loginUser({email, password}).then((response) => {
            authentication(dispatch, response, history);
        }).catch((error) => {
            dispatch(loading(false));
            console.log(error);
        });
    };
};

export const signup = ({email, password}, history) => {
    return (dispatch) => {
        dispatch(loading(true));
        signupUser({email, password}).then((response) => {
            authentication(dispatch, response, history);
        }).catch((error) => {
            dispatch(loading(false));
            console.log(error);
        });
    };
};

export const authentication = (dispatch, response, history) => {
    const {token} = response.data;
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
    dispatch(setCurrentUser(token));
    dispatch(setAuthentication(true));
    dispatch(loading(false));
    history.push(Routes.HOME)
};

export const setAuthentication = (isAuthenticated) => {
    return {
        type: IS_AUTHENTICATED,
        payload: {
            authenticated: isAuthenticated
        }
    }
};

export const logout = (history) => {
    localStorage.removeItem('token');
    history.push(Routes.AUTH);
    return {
        type:LOGOUT_USER
    }
};

export const setCurrentUser = (token) => {
    return (dispatch) => {
        const decoded = jwt(token);
        dispatch({
            type: SET_CURRENT_USER,
            payload: {
                email: decoded.email,
                token,
                id: decoded.id,
                isAdmin: decoded.isAdmin
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