import React from 'react';
import {SideNav, SideNavItems, SideNavLink} from 'carbon-components-react';
import {Link, withRouter} from 'react-router-dom';
import {Routes} from '../../utils/Routes';

class MainSideNav extends React.Component {
    render() {
        return (
            <SideNav
                aria-label="Side navigation"
                expanded={this.props.isSideNavExpanded}
                isPersistent={false}>
                <SideNavItems>
                    {!this.props.isAuthenticated ? <this.NotAuthenticated/> : <this.Authenticated/>}
                    <SideNavLink href="http://ebike-prod.us-east-1.elasticbeanstalk.com/readme/">
                        Documentation
                    </SideNavLink>
                </SideNavItems>
            </SideNav>
        );
    }

    NotAuthenticated = () => {
        return (
            <>
                <SideNavLink element={Link} to={Routes.AUTH}>
                    Login
                </SideNavLink>
            </>
        );
    };

    Authenticated = () => {
        return (
            <>
                <SideNavLink onClick={this.onLogout}>
                    Logout
                </SideNavLink>
                <SideNavLink element={Link} to={Routes.HOME}>
                    Home
                </SideNavLink>
                <SideNavLink element={Link} to={Routes.MAP}>
                   Map
                </SideNavLink>
            </>);
    };

    onLogout = () => {
        this.props.logout(this.props.history);
        this.props.history.push(Routes.AUTH);
    };
}

export default withRouter(MainSideNav);