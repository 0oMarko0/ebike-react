import React from 'react';
import {
    Header,
    HeaderContainer,
    HeaderMenuButton,
    HeaderName,
    SkipToContent,
} from 'carbon-components-react';
import MainSideNav from '../side-nav/SideNav';

export default class MainHeader extends React.Component {
    render() {
        return (
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <>
                        <Header aria-label="IBM Platform Name">
                            <SkipToContent />
                            <HeaderMenuButton
                                aria-label="Open menu"
                                onClick={onClickSideNavExpand}
                                isActive={isSideNavExpanded}
                            />
                            <HeaderName href="#" prefix="E-BIKE">
                                [Platform]
                            </HeaderName>
                            <MainSideNav isSideNavExpanded={isSideNavExpanded}/>
                        </Header>
                    </>
                )}
            />
        );
    }
}