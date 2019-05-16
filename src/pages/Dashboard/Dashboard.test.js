import React from 'react';
import { mount } from '../../enzyme.js';
import Dashboard from './Dashboard.js';

describe('Dashboard tests', () => {
	it('renders Dashboard', () => {
		const wrapper = mount(<Dashboard />);
		expect(wrapper.find('.Dashboard')).toBeDefined();
	});
});
