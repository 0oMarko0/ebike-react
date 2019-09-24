import {LOADING} from '../../action/loading/LoadingAction';

const initialState = {
    isLoading: false,
};

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING: {
            const {isLoading} = action.payload;
            return {
                ...state,
                isLoading,
            };
        }
        default: {
            return state;
        }
    }
};