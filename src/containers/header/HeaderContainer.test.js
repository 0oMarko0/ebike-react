import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import HeaderContainer from './HeaderContainer';

const middlewares = [];
const mockStore = configureStore(middlewares);

test('should renders without crashing', () => {
    const store = mockStore({});
    shallow(<Provider store={store}>
        <HeaderContainer/>
    </Provider>);
});

