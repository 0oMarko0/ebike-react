import {ERROR_TOAST, INFO_TOAST, SUCCESS_TOAST, WARNING_TOAST} from '../../action/toast/ToastAction';

export const toastReducer = (state = {}, action) => {
    switch (action.type) {
        case WARNING_TOAST: {
            return {
                ...state,
            };
        }
        case ERROR_TOAST: {
            return {
                ...state,
            };
        }
        case INFO_TOAST: {
            return {
                ...state,
            };
        }
        case SUCCESS_TOAST: {
            return {
                ...state,
            };
        }
        default: {
            return state;
        }
    }
};