import api from './api';

export function getGlobalStatistics() {
    return api.get('/api/statistics');
}