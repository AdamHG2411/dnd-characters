import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from '../../enzyme.js';
import Header from './Header.js';

describe('Header tests', () => {
	it('renders Header', () => {
		const wrapper = mount(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
		expect(wrapper.find('.Header')).toBeDefined();
	});
});
