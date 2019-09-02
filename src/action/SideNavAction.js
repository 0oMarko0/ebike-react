export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';

export const toggleSideNav = (isSideNavExpanded) => ({
    type: TOGGLE_SIDE_NAV,
    payload: {
        isSideNavExpanded
    }
});

export const getSideNavState = store => {
    return store.sideNavReducer.isSideNavExpanded;
};

