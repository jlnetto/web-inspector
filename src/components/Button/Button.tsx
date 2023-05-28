import { StyledButton, Spinner } from './styles';

export type ButtonProps = {
  type: 'submit' | 'button';
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  disabled,
  loading,
  ...props
}) => (
  <StyledButton {...props} disabled={disabled || loading}>
    {loading ? <Spinner data-testid="spinner" /> : text}
  </StyledButton>
);

export default Button;
