import api from './api';

export function heartbeat() {
    return api.get('/api/heartbeat');
}