import React from 'react';
import {shallow} from 'enzyme';
import MainSideNav from './MainSideNav';
import {SideNav, SideNavLink} from 'carbon-components-react';

test('should renders without crashing', () => {
    shallow(<MainSideNav/>);
});

test('should render when side nav is toggled', () => {
    const wrapper = shallow(<MainSideNav isSideNavExpanded={true}/>);
    expect(wrapper.find(SideNavLink).length).toBeGreaterThan(1);
    expect(wrapper.find(SideNav).get(0).props.expanded).toBe(true);
});

test('should not render when side nav is not toggled', () => {
    const wrapper = shallow(<MainSideNav isSideNavExpanded={false}/>);
    expect(wrapper.find(SideNav).get(0).props.expanded).toBe(false);
});