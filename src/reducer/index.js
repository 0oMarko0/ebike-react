import {combineReducers} from 'redux';
import {sideNavReducer} from './side-nav/SideNavReducer';
import {authReducer} from './auth/AuthReducer';
import {loadingReducer} from './loading/LoadingReducer';
import {toastReducer} from './toast/ToastReducer';

export default combineReducers({sideNavReducer, authReducer, loadingReducer, toastReducer});
