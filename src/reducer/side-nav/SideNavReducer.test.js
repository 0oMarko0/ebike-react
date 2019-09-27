import {sideNavReducer} from './SideNavReducer';
import {TOGGLE_SIDE_NAV} from '../../action/side-nav/SideNavAction';

test('should return the initial state', () => {
    expect(sideNavReducer(undefined, {})).toEqual(
        {
            isSideNavExpanded: false,
        },
    );
});

test('should handle TOGGLE_SIDE_NAV', () => {
    expect(sideNavReducer({}, {
        type: TOGGLE_SIDE_NAV,
        payload: {
            isSideNavExpanded: true,
        },
    })).toEqual({isSideNavExpanded: true});
});