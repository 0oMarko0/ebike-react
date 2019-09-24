import React from 'react';
import {SideNav, SideNavItems, SideNavLink} from 'carbon-components-react';
import {Link} from 'react-router-dom';

export default class MainSideNav extends React.Component {
    render() {
        return (
            <SideNav
                aria-label="Side navigation"
                expanded={this.props.isSideNavExpanded}
                isPersistent={false}>
                <SideNavItems>
                    {!this.props.isAuthenticated ? <this.NotAuthenticated/> : <this.Authenticated/>}
                    <SideNavLink element={Link} to="/home">
                        Home
                    </SideNavLink>
                    <SideNavLink element={Link} to="/example">
                        Example
                    </SideNavLink>
                </SideNavItems>
            </SideNav>
        );
    }

    NotAuthenticated = () => {
        return (
            <SideNavLink element={Link} to="/auth">
                Login
            </SideNavLink>);
    };

    Authenticated = () => {
        return (
            <SideNavLink onClick={this.props.logout}>
                Logout
            </SideNavLink>);
    };

}