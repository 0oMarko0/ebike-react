import React from 'react';
import {shallow} from 'enzyme';
import AuthForm from './AuthForm';

test('should renders without crashing', () => {
    shallow(<AuthForm/>);
});