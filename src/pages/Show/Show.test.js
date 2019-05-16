import React from 'react';
import { mount } from '../../enzyme.js';
import Show from './Show.js';

describe('Show tests', () => {
	it('renders Show', () => {
		const wrapper = mount(<Show />);
		expect(wrapper.find('.Show')).toBeDefined();
	});
});
