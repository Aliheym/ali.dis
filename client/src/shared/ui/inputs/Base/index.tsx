import clsx from 'clsx';
import styles from './index.module.css';

interface InputProps {
  type?: string;
  placeholder?: string;
  fullWidth?: boolean;
}

export const BaseInput: React.FC<InputProps> = ({
  placeholder = '',
  type = 'text',
  fullWidth = false,
}) => {
  const rootStyles = clsx(styles.root, fullWidth && styles.rootFullWidth);
  const inputStyles = clsx(styles.input);

  return (
    <div className={rootStyles}>
      <input placeholder={placeholder} type={type} className={inputStyles} />
    </div>
  );
};
