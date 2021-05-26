import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

useSelector.mockImplementation((selector) => selector({
  restaurants: [],
}));

it('renders header', () => {
  const { container } = render(<App />);
  expect(container).toHaveTextContent('Restaurants');
});
