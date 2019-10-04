import {toast} from 'react-toastify';
import {ErrorToast, InfoToast, SuccessToast, toastOption, WarningToast} from '../../components/toast-type/ToastType';

export const WARNING_TOAST = 'WARNING_TOAST';
export const ERROR_TOAST = 'ERROR_TOAST';
export const SUCCESS_TOAST = 'SUCCESS_TOAST';
export const INFO_TOAST = 'INFO_TOAST';

export const pushWarning = (message, title) => {
    return (dispatch) => {
        dispatch({
            type: WARNING_TOAST
        });
        toast(WarningToast(message, title), toastOption);
    }
};

export const pushError = (message, title) => {
    return (dispatch) => {
        dispatch({
            type: ERROR_TOAST
        });
        toast(ErrorToast(message, title), toastOption);
    }
};

export const pushInfo = (message, title) => {
    return (dispatch) => {
        dispatch({
            type: INFO_TOAST
        });
        toast(InfoToast(message, title), toastOption);
    }
};

export const pushSuccess = (message, title) => {
    return (dispatch) => {
        dispatch({
            type: SUCCESS_TOAST
        });
        toast(SuccessToast(message, title), toastOption);
    }
};