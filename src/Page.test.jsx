import React from 'react';

import { render } from '@testing-library/react';

import Page from './Page';

describe('Page', () => {
  context('when start application', () => {
    it('Restaurants가 보인다.', () => {
      const { container } = render(
        <Page />,
      );

      expect(container).toHaveTextContent('Restaurants');
    });

    it('3개의 input이 있다.', () => {
      const { container } = render(
        <Page />,
      );

      const nameInput = container.querySelector('input[name = name]');
      const categoryInput = container.querySelector('input[name = category]');
      const addressInput = container.querySelector('input[name = address]');

      expect(nameInput).not.toBeNull();
      expect(categoryInput).not.toBeNull();
      expect(addressInput).not.toBeNull();
    });

    it('등록 버튼이 보인다.', () => {
      const { container } = render(
        <Page />,
      );

      expect(container).toHaveTextContent('등록');
    });
  });
});
