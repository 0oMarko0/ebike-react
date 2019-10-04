import {HEARTBEAT} from '../../action/heartbeat/HeartbeatAction';

const initialState = {
    nbOfRestaurants: 0,
    totalBikePathLength: 0,
    nbOfActiveUser: 10,
    nbOfTotalUser: 120
};

export const heartbeatReducer = (state = initialState, action) => {
    const {payload} = action;
    switch (action.type) {
        case HEARTBEAT:
            return {
                ...state,
                payload,
            };
        default:
            return state;
    }
};