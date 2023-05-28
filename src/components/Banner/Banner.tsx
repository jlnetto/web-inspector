import { ReactComponent as ErrorIcon } from '../../assets/error.svg';
import { ReactComponent as SuccessIcon } from '../../assets/success.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { BannerContainer, IconContainer, Message, CloseWrapper } from './styles';

type BannerProps = {
  type: 'error' | 'success';
  message: string;
  onClose?: () => void;
};

const Banner: React.FC<BannerProps> = ({ type, message, onClose }) => {
  const IconComponent = type === 'error' ? ErrorIcon : SuccessIcon;

  return (
    <BannerContainer type={type}>
      <IconContainer>
        <IconComponent />
      </IconContainer>
      <Message>{message}</Message>
      <CloseWrapper onClick={onClose}>
        <CloseIcon data-testid="close" />
      </CloseWrapper>
    </BannerContainer>
  );
};

export default Banner;
