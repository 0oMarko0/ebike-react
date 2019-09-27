import React from 'react';
import {shallow} from 'enzyme';
import MainSideNav from './MainSideNav';
import {SideNav, SideNavLink} from 'carbon-components-react';

test('should renders without crashing', () => {
    shallow(<MainSideNav/>);
});