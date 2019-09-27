import React from 'react';
import {Button, Form, TextInput, TextInputSkeleton, Tile} from 'carbon-components-react';
import {connect} from 'react-redux';
import {login, signup} from '../../action/auth/AuthAction';
import {getLoadingState} from '../../action/loading/LoadingAction';
import {withRouter} from 'react-router-dom';

class AuthForm extends React.Component {
    emailId = 'email-id';
    passwordId = 'password-id';

    textInputProps = {
        id: this.emailId,
        className: 'auth-form__input',
        labelText: 'Email Address',
        placeholder: 'johnDoe@email.com',
        onChange: () => this.handleFormChange(),
    };

    passwordProps = {
        id: this.passwordId,
        className: 'auth-form__input',
        labelText: 'Password',
        onChange: () => this.handleFormChange(),
    };

    loginButton = {
        disabled: true,
        onClick: e => {
            e.preventDefault();
            this.submitValueLogin();
        },
    };

    registerButton = {
        disabled: true,
        onClick: e => {
            e.preventDefault();
            this.submitValueSignup();
        },
    };

    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    render() {
        return (
            <div>
                <Tile className="auth-form__tile">
                    {this.props.isLoading ? <this.loadingForm/> : <this.authForm/>}
                </Tile>
                <div className="btn-set">
                    <Button {...this.registerButton} className="auth-form__submit-btn" kind="primary">
                        Register
                    </Button>
                    <Button {...this.loginButton} className="auth-form__submit-btn" kind="secondary">
                        Login
                    </Button>
                </div>
            </div>
        );
    }

    loadingForm = () => {
        return (
            <div>
                <h2 className="auth-form__header">Authenticate</h2>
                <Form>
                    <div className="auth-form__header">
                        <TextInputSkeleton/>
                    </div>
                    <div className="auth-form__header">
                        <TextInputSkeleton/>
                    </div>
                </Form>
            </div>
        );
    };

    authForm = () => {
        return (
            <div>
                <h2 className="auth-form__header">Authenticate</h2>
                <Form>
                    <TextInput {...this.textInputProps}
                               required
                    />
                    <TextInput
                        type="password"
                        required
                        {...this.passwordProps}
                    />
                </Form>
            </div>
        );
    };

    isFormEmpty() {
        const value = this.getFormValue();
        return !(value.password.length > 0 && value.email.length > 0);
    };

    handleFormChange() {
        this.setButtonState(this.isFormEmpty());
        this.forceUpdate();
    };

    setButtonState(state) {
        this.registerButton.disabled = state;
        this.loginButton.disabled = state;
    };

    submitValueSignup() {
        this.props.signup(this.getFormValue(), this.props.history);
    }

    submitValueLogin() {
        this.props.login(this.getFormValue(), this.props.history);
    }

    getFormValue() {
        return {
            email: document.getElementById(this.emailId).value,
            password: document.getElementById(this.passwordId).value,
        };
    }
}

const mapStateToProps = state => {
    return {
        isLoading: getLoadingState(state),
    };
};

const mapDispatchToProps = dispatch => ({
    login: ({email, password}, history) => dispatch(login({email, password}, history)),
    signup: ({email, password}, history) => dispatch(signup({email, password}, history)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(withRouter(AuthForm));

