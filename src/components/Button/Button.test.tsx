import { render, fireEvent, screen } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

describe('Button', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders with text', () => {
    const props: ButtonProps = {
      text: 'Click me',
      onClick: handleClick,
      type: 'button',
    };
    const { asFragment } = render(<Button {...props} />);

    expect(screen.getByText('Click me')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with default button type', () => {
    const props: ButtonProps = {
      text: 'Click me',
      onClick: handleClick,
      type: 'button',
    };
    render(<Button {...props} />);
    expect(screen.getByText('Click me')).toHaveAttribute('type', 'button');
  });

  it('renders with submit button type', () => {
    const props: ButtonProps = {
      text: 'Submit',
      onClick: handleClick,
      type: 'submit',
    };
    render(<Button {...props} />);
    expect(screen.getByText('Submit')).toHaveAttribute('type', 'submit');
  });

  it('calls onClick handler when clicked', () => {
    const props: ButtonProps = {
      text: 'Click me',
      onClick: handleClick,
      type: 'button',
    };
    render(<Button {...props} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('does not call onClick handler when disabled', () => {
    const props: ButtonProps = {
      text: 'Click me',
      onClick: handleClick,
      disabled: true,
      type: 'button',
    };
    render(<Button {...props} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('render with loading spinner when loading is active', () => {
    const props: ButtonProps = {
      text: 'Click me',
      onClick: handleClick,
      disabled: true,
      type: 'button',
      loading: true,
    };
    render(<Button {...props} />);

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
