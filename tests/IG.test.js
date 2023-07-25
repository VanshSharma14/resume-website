import React from 'react';
import renderer from 'react-test-renderer';

import IG from '../src/component/IG.js';

describe('<IG />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<IG />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });