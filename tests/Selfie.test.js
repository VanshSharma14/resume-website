import React from 'react';
import renderer from 'react-test-renderer';

import Selfie from '../src/component/Selfie.js';

describe('<Selfie />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Selfie />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });