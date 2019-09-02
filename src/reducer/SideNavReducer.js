import { TOGGLE_SIDE_NAV } from '../action/SideNavAction';

const initialState = {
    isSideNavExpanded: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDE_NAV: {
            const {isSideNavExpanded} = action.payload;
            return {
                ...state,
                isSideNavExpanded
            }
        }
        default: {
            return state
        }
    }
}