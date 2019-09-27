import React from 'react';
import {shallow} from 'enzyme';
import AuthForm from './AuthForm';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test('should renders without crashing', () => {
    const store = mockStore({isLoading: false});
    shallow(<Provider store={store}>
        <AuthForm/>
    </Provider>);
});