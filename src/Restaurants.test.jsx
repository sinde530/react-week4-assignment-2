import React from 'react';

import { render } from '@testing-library/react';

import restaurants from '../fixtures/restaurants';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('renders headline', () => {
    const { getByText } = render((
      <Restaurants restaurants={restaurants} />
    ));

    expect(getByText(/김밥제국/)).not.toBeNull();
  });
});
