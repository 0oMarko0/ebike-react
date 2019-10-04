import {loading} from '../loading/LoadingAction';
import {heartbeat} from '../../service/heartbeat';

export const HEARTBEAT = 'HEARTBEAT';

export const getHeartbeat = () => {
    return (dispatch) => {
        heartbeat().then((response) => {
            setCurrentHeartBeatInfo(response.data);
        }).catch((error) => {
            dispatch(loading(false));
            console.log(error);
        });
    };
};

export const setCurrentHeartBeatInfo = (heartbeat) => {
    return (dispatch) => {
        dispatch({
            type: HEARTBEAT,
            payload: {
                nbOfRestaurants: heartbeat.nb_restaurants,
                totalBikePathLength: heartbeat.total_path_length
            }
        })
    }
};