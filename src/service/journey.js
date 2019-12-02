import api from './api';

export function getAJourney(journey) {
    return api.post('/journey', journey);
}

export function getStartingPoint(staringPoint) {
    return api.post('/starting-point', staringPoint)
}