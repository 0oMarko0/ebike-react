import React from 'react';
import {Button, Form, TextInput, TextInputSkeleton, Tile} from 'carbon-components-react';
import {connect} from 'react-redux';
import {login, signup} from '../../action/auth/AuthAction';
import {getLoadingState} from '../../action/loading/LoadingAction';

class AuthForm extends React.Component {
    emailId = 'email-id';
    passwordId = 'password-id';

    textInputProps = {
        className: 'auth-form__input',
        labelText: 'Email Address',
        placeholder: 'johnDoe@email.com',
    };

    passwordProps = {
        className: 'auth-form__input',
        labelText: 'Password',
    };

    formConfig = {
        onSubmit: e => {
            e.preventDefault();
            this.submitValueSignup();
        },
    };

    render() {
        return (
            <Tile className="auth-form__tile">
                <h2 className="auth-form__header">Login</h2>
                {this.props.isLoading ? <this.loadingForm/> : <this.loginForm/>}
            </Tile>
        );
    }

    loadingForm = () => {
        return (
            <Form {...this.formConfig}>
                <TextInputSkeleton/>
                <TextInputSkeleton/>
                <Button type="submit" disabled={true}>
                    Submit
                </Button>
            </Form>
        );
    };

    loginForm = () => {
        this.textInputProps.id = this.emailId;
        this.passwordProps.id = this.passwordId;

        return (
            <Form {...this.formConfig}>
                <TextInput {...this.textInputProps}
                    required
                />
                <TextInput
                    type="password"
                    required
                    {...this.passwordProps}
                />
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        );
    };

    registerForm = () => {
        return (
            <Form>
                <TextInput {...this.textInputProps} />

                <TextInput
                    type="password"
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    {...this.passwordProps}
                />
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        );
    };

    submitValueSignup() {
        this.props.signup(this.getFormValue());
    }

    submitValueLogin() {
        this.props.signup(this.getFormValue());
    }

    getFormValue() {
        return {
            email: document.getElementById(this.emailId).value,
            password: document.getElementById(this.passwordId).value
        }
    }
}

const mapStateToProps = state => {
    return {
        isLoading: getLoadingState(state)
    }
};

const mapDispatchToProps = dispatch => ({
    login: ({email, password}) => dispatch(login({email, password})),
    signup: ({email, password}) => dispatch(signup({email, password}))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(AuthForm);

