import { render, fireEvent, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner component', () => {
  test('renders with error type and message', () => {
    const { asFragment } = render(
      <Banner type="error" message="An error occurred" />
    );

    const errorMessage = screen.getByText('An error occurred');
    expect(errorMessage).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with success type and message', () => {
    const { asFragment } = render(
      <Banner type="success" message="Success message" />
    );

    const successMessage = screen.getByText('Success message');
    expect(successMessage).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(
      <Banner type="error" message="An error occurred" onClose={onCloseMock} />
    );

    const closeButton = screen.getByTestId('close');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
