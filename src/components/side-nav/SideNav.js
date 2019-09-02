import React from 'react';
import {
    SideNav,
    SideNavItems,
    SideNavLink
} from 'carbon-components-react';
import {Link} from 'react-router-dom';

export default class MainSideNav extends React.Component {
    render() {
        return (
            <SideNav
                aria-label="Side navigation"
                expanded={this.props.isSideNavExpanded}
                isPersistent={false}>
                <SideNavItems>
                    <SideNavLink element={Link} to="/home">
                       Home
                    </SideNavLink>
                    <SideNavLink element={Link} to="/example">
                        Example
                    </SideNavLink>
                </SideNavItems>
            </SideNav>
        )
    }
}