/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './app';

Enzyme.configure({
  adapter: new Adapter(),
});

test('renders without crashing', () => {
  const Wrapper = shallow(<App />);
  expect(Wrapper).toBeTruthy();
});
