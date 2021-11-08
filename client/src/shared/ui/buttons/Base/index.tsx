import React, { DOMAttributes } from 'react';
import styles from './index.module.css';

interface ButtonProps {
  text?: string;
  type?: 'button' | 'submit';
}

type BaseButtonProps = ButtonProps & DOMAttributes<HTMLButtonElement>;

export const BaseButton: React.FC<BaseButtonProps> = ({ text = '', type = 'button', ...props }) => {
  return (
    <button type={type} className={styles.root} {...props}>
      {text}
    </button>
  );
};
