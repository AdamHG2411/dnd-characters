import React from 'react';
import { mount } from './enzyme.js';

import App from './App.js';

describe('App tests', () => {
	it('renders App', () => {
		const wrapper = mount(<App />);
		expect(wrapper.find('.App')).toBeDefined();
	});
});
