import React from 'react';
import {
    Header,
    HeaderMenuButton,
    HeaderName,
    SkipToContent
} from 'carbon-components-react';
import MainSideNav from '../../components/side-nav/MainSideNav';
import {connect} from 'react-redux';
import {toggleSideNav} from '../../action/SideNavAction';

class MainHeaderContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isSideNavExpanded: false};
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth });
        if (window.innerWidth > 1055) {
            this.props.toggleSideNav(true);
            this.setState({isSideNavExpanded: true})
        } else {
            this.props.toggleSideNav(false);
            this.setState({isSideNavExpanded: false})
        }
    };

    onClick = () => {
        this.setState({isSideNavExpanded: !this.state.isSideNavExpanded});
        this.props.toggleSideNav(!this.state.isSideNavExpanded);
    };

    render() {
        return (
            <>
                <Header aria-label="IBM Platform Name">
                    <SkipToContent />
                    <HeaderMenuButton
                        aria-label="Open menu"
                        onClick={this.onClick}
                        isActive={this.state.isSideNavExpanded}
                        isCollapsible={false}
                    />
                    <HeaderName href="#" prefix="E-BIKE">
                        [Platform]
                    </HeaderName>
                    <MainSideNav isSideNavExpanded={this.state.isSideNavExpanded}/>
                </Header>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
   toggleSideNav: (isSideNavExpanded) => dispatch(toggleSideNav(isSideNavExpanded))
});

export default connect(
    null,
    mapDispatchToProps)(MainHeaderContainer)

