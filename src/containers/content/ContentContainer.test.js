import React from 'react';
import {shallow} from 'enzyme';
import ContentContainer from './ContentContainer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const middlewares = [];
const mockStore = configureStore(middlewares);

test('should renders without crashing', () => {
    const store = mockStore({});
    shallow(<Provider store={store}>
        <ContentContainer/>
    </Provider>);
});

test('should render children', () => {
    const store = mockStore({});
    const wrapper = shallow(
        <Provider store={store}>
            <ContentContainer>
                <div>
                    <h1>test</h1>
                </div>
            </ContentContainer>
        </Provider>);

    expect(wrapper.contains(<h1>test</h1>)).toBe(true);
});