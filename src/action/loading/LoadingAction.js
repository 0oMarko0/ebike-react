export const LOADING = 'LOADING';

export const loading = (isLoading) => ({
    type: LOADING,
    payload: {
        isLoading,
    },
});

export const getLoadingState = state => {
    return state.loadingReducer.isLoading;
};