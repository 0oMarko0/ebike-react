import {getSideNavState, TOGGLE_SIDE_NAV, toggleSideNav} from './SideNavAction';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test('should create an action for toggle side nav', () => {
    const expectedAction = {
        type: TOGGLE_SIDE_NAV,
        payload: {
            isSideNavExpanded: true,
        },
    };

    expect(toggleSideNav(true)).toEqual(expectedAction);
});

test('should return the toggle state', () => {
    const initialState = {sideNavReducer: {isSideNavExpanded: false}};
    const store = mockStore(initialState);
    expect(getSideNavState(store.getState())).toBe(false);
});