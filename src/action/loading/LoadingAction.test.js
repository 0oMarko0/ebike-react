import {getLoadingState, LOADING} from './LoadingAction';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {loading} from '../loading/LoadingAction';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test('should create an action for the loading state', () => {
    const expectedAction = {
        type: LOADING,
        payload: {
            isLoading: true
        }
    };
    expect(loading(true)).toEqual(expectedAction);
});

test('should return the loading state', () => {
   const initialState = { loadingReducer: {isLoading: false}};
    const store = mockStore(initialState);
    expect(getLoadingState(store.getState())).toBe(false);
});