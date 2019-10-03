import React from 'react';
import PageHeader from '../../components/page-header/PageHeader';
import {Routes} from '../../utils/Routes';
import ToastContent from '../../components/toast-content/ToastContent';

export default class HomePage extends React.Component {
    render() {
        const breadcrumb = [
            {
                link: Routes.HOME,
                name: "Home"
            }
        ];

        return (
            <div className="bx--grid bx--grid--full-width">
                <PageHeader title="Home" breadcrumb={breadcrumb}/>
                <ToastContent/>
            </div>
        );
    }
}