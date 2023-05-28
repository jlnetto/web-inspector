import { render, fireEvent } from '@testing-library/react';
import TextField from './TextField';

const onChangeMock = jest.fn();
describe('TextField component', () => {
  it('render input correctly', () => {
    const { asFragment } = render(
      <TextField
        name="username"
        label="Username"
        onChange={onChangeMock}
        value=""
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onChange with input value', () => {
    const { getByRole } = render(
      <TextField
        name="username"
        label="Username"
        onChange={onChangeMock}
        value=""
      />
    );

    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'testuser' } });

    expect(onChangeMock).toHaveBeenCalledWith('testuser');
  });
});
