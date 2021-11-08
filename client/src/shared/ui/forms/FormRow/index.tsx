import React from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

interface FormRowProps {
  last?: boolean;
}

export const FormRow: React.FC<FormRowProps> = ({ last = false, children }) => {
  const rootStyles = clsx(styles.root, last && styles.rootLast);

  return <div className={rootStyles}>{children}</div>;
};
