import {combineReducers} from 'redux';
import {sideNavReducer} from './side-nav/SideNavReducer';
import {loadingReducer} from './loading/LoadingReducer';
import {toastReducer} from './toast/ToastReducer';

export default combineReducers({
    sideNavReducer,
    loadingReducer,
    toastReducer
});
