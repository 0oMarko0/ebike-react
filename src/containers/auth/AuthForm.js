import React from 'react';
import {Button, Form, TextInput, Tile} from 'carbon-components-react';
import {connect} from 'react-redux';

class AuthForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isSideNavExpanded: false};
    }

    render() {
        return (
            <Tile className="auth-form__tile">
                <h2 className="auth-form__header">Login</h2>
                <this.loginForm/>
            </Tile>
        );
    }

    loginForm = () => {
        const TextInputProps = {
            className: 'auth-form__input',
            labelText: 'Email Address',
            placeholder: 'johnDoe@email.com',
        };

        const PasswordProps = {
            className: 'auth-form__input',
            labelText: 'Password',
        };

        const buttonEvents = {
            className: 'some-class',
        };

        return (
            <Form>
                <TextInput {...TextInputProps}
                           required
                />

                <TextInput
                    type="password"
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    {...PasswordProps}
                />
                <Button type="submit" className="some-class" {...buttonEvents}>
                    Submit
                </Button>
            </Form>
        );
    };

    registerForm = () => {
        const TextInputProps = {
            className: 'some-class',
            id: 'test2',
            labelText: 'Text Input label',
            placeholder: 'Placeholder text',
        };

        const PasswordProps = {
            className: 'some-class',
            id: 'test3',
            labelText: 'Password',
        };

        const buttonEvents = {
            className: 'some-class',
        };

        return (
            <Form>
                <TextInput {...TextInputProps} />

                <TextInput
                    type="password"
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    {...PasswordProps}
                />
                <Button type="submit" className="some-class" {...buttonEvents}>
                    Submit
                </Button>
            </Form>
        );
    };
}

export default connect(
    null,
    null)(AuthForm);

