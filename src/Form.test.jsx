import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import fixture from '../__fixtuers__/fixture';

import Form from './Form';

const handleChangeInput = jest.fn();
const handleClickAddRestaurant = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Form', () => {
  const { inputInfos } = fixture;

  function renderForm() {
    return render((
      <Form
        inputInfos={inputInfos}
        onChangeInput={handleChangeInput}
        onClickAddRestautant={handleClickAddRestaurant}
      />
    ));
  }

  it('renders 3 inputs with different placeholder and name attirbute', () => {
    const { getAllByRole, getByPlaceholderText } = renderForm();

    expect(getAllByRole('textbox')).toHaveLength(inputInfos.length);

    inputInfos.forEach(({ name, placeholder, value }) => {
      const input = getByPlaceholderText(placeholder);

      expect(input).toHaveDisplayValue(value);
      expect(input).toHaveAttribute('name', name);

      fireEvent.change(input,
        { target: { value: '쏘이연남' } });
    });

    expect(handleChangeInput).toBeCalledTimes(inputInfos.length);
  });

  it('renders add restaurant button', () => {
    const { container, getByText } = renderForm();

    expect(container).toHaveTextContent('등록');

    fireEvent.click(getByText('등록'));

    expect(handleClickAddRestaurant).toBeCalled();
  });
});
