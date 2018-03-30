import React from 'react';
import { shallow } from 'enzyme';
import Account from './Account';

describe('Account', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Account />).exists('.page-account')).toBe(true);
  });
});