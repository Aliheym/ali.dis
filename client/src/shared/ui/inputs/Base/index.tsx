import React, { DOMAttributes } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

interface InputAttrs {
  rows?: number;
  cols?: number;
}

interface InputProps {
  type?: string;
  placeholder?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  attrs?: InputAttrs;
}

type BaseInputProps = InputProps & DOMAttributes<HTMLInputElement | HTMLTextAreaElement>;

export const BaseInput = React.forwardRef<any, BaseInputProps>((props, ref) => {
  const { type = 'text', fullWidth = false, multiline = false, attrs = {}, ...otherProps } = props;

  const rootStyles = clsx(styles.root, fullWidth && styles.rootFullWidth);
  const inputStyles = clsx(styles.input);

  let component = null;
  if (multiline) {
    component = <textarea ref={ref} className={inputStyles} {...attrs} {...otherProps} />;
  } else {
    component = <input ref={ref} type={type} className={inputStyles} {...attrs} {...otherProps} />;
  }

  return <div className={rootStyles}>{component}</div>;
});
