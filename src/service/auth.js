import api from './api';

export function loginUser({email, password}) {
    return api.post('/api/signin', {email, password});
}

export function signupUser({email, password}) {
    return api.post('/api/signup', {email, password});
}