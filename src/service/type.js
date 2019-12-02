import api from './api';

export function getRestaurantsType() {
    return api.get('/type');
}