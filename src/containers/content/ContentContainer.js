import React from 'react';
import './_content-container.scss';
import classNames from 'classnames';
import {Content} from 'carbon-components-react';
import {connect} from 'react-redux';
import {getSideNavState} from '../../action/side-nav/SideNavAction';
import ToastContent from '../../components/toast-content/ToastContent';

class ContentContainer extends React.Component {
    render() {
        return (
            <Content className={classNames({'side-nav-with': this.props.isSideNavExpanded}, 'content')}>
                <ToastContent/>
                {this.props.children}
            </Content>
        );
    }
}

const mapStateToProps = state => ({
    isSideNavExpanded: getSideNavState(state),
});

export default connect(
    mapStateToProps,
    null)(ContentContainer);