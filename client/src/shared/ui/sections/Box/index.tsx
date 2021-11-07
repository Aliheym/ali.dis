import React from 'react';
import styles from './index.module.css';

interface BoxProps {
  component?: string;
}

export const Box: React.FC<BoxProps> = ({ component = 'div', children }) => {
  return React.createElement(component, { className: styles.root }, children);
};
