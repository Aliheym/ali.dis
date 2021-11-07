import clsx from 'clsx';
import React from 'react';
import { upperFirst } from 'shared/lib/utils/strings';
import styles from './index.module.css';

interface BaseHeaderProps {
  text?: string;
  children?: string;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
  size?: 'huge' | 'big' | 'normal' | 'small' | 'tiny';
  weight?: 'bold' | 'normal' | 'thick';
}

export const BaseHeader: React.FC<BaseHeaderProps> = ({
  component = 'span',
  size = 'big',
  weight = 'normal',
  children,
  text = '',
}) => {
  const rootStyles = clsx(
    styles.root,
    styles[`rootSize${upperFirst(size)}`],
    styles[`rootWeight${upperFirst(weight)}`]
  );

  return React.createElement(component, { className: rootStyles }, children || text);
};
