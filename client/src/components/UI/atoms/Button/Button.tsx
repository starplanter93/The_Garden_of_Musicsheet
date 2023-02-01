import styles from './button.module.scss';
import classNames from 'classnames/bind';

interface ButtonProps {
  children: JSX.Element | string;
  theme?: 'primary' | 'secondary' | 'tertiary' | 'transparent' | 'toggle';
  size?: 'auto' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'tiny';
  clicked?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  theme = 'primary',
  size = 'l',
  clicked = false,
  disabled = false,
  onClick = undefined,
}: ButtonProps) => {
  const cx = classNames.bind(styles);

  return (
    <button
      className={cx(
        'default-button',
        `${theme}`,
        `${size}`,
        disabled && 'disabled',
        clicked && 'clicked'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
