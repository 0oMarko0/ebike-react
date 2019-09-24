import {combineReducers} from 'redux';
import {sideNavReducer} from './side-nav/SideNavReducer';
import {authReducer} from './auth/AuthReducer';
import {loadingReducer} from './loading/LoadingReducer';

export default combineReducers({sideNavReducer, authReducer, loadingReducer});
