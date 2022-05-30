import React from 'react';

import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import restaurants from '../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  it('renders headline', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    const { getByText } = render((<RestaurantsContainer />));

    expect(getByText(/김밥제국/)).not.toBeNull();
  });
});
