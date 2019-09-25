import React from 'react';
import AuthForm from '../../containers/auth/AuthForm';
import PageHeader from '../../components/page-header/PageHeader';
import {Routes} from '../../utils/Routes';

export default class AuthenticationPage extends React.Component {
    render() {
        const breadcrumb = [
            {
                link: Routes.HOME,
                name: "Home"
            },
            {
                link: Routes.AUTH,
                name: "User"
            },
            {
                link: Routes.AUTH,
                name: "Auth"
            },
        ];

        return (
            <div className="bx--grid bx--grid--full-width">
                <PageHeader title="Authentication" breadcrumb={breadcrumb}/>
                <div className="bx--row auth-page__form-content">
                    <div className="auth-page__spacing">
                        <AuthForm/>
                    </div>
                </div>
            </div>
        );
    }
}