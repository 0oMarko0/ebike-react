import React from 'react';
import {SkeletonText} from 'carbon-components-react';
import PageHeader from '../../components/page-header/PageHeader';
import AuthForm from '../../containers/auth/AuthForm';
import {Routes} from '../../utils/Routes';

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
            </div>
        );
    }
}