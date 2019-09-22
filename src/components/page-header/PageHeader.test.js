import React from 'react';
import {shallow} from 'enzyme';
import PageHeader from './PageHeader';

const title = "Un titre";

test('should renders without crashing', () => {
    shallow(<PageHeader title={title} />);
});

test('should render the title', () => {
    const wrapper = shallow(<PageHeader title={title}/>);
    expect(wrapper.find('h1').length).toEqual(1);
});
