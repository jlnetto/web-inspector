import { StyledTextField, Wrapper } from './styles';

type InputProps = {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const TextField: React.FC<InputProps> = ({
  name,
  label,
  onChange,
  placeholder,
  ...rest
}) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <StyledTextField
        {...rest}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default TextField;
