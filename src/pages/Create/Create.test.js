import React from 'react';
import { mount } from '../../enzyme.js';
import Create from './Create.js';

describe('Create tests', () => {
	it('renders Create', () => {
		const wrapper = mount(<Create />);
		expect(wrapper.find('.Create')).toBeDefined();
	});
});
