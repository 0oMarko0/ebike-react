import React from 'react';
import AuthForm from '../../containers/auth/AuthForm';
import PageHeader from '../../components/page-header/PageHeader';

export default class AuthenticationPage extends React.Component {
    render() {
        return (
            <div className="bx--grid bx--grid--full-width">
                <PageHeader title="Authentication"/>
                <div className="bx--row auth-page__form-content">
                    <div className="auth-page__spacing">
                        <AuthForm/>
                    </div>
                </div>
            </div>
        );
    }
}