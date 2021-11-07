import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

interface SectionProps {
  inner?: boolean;
  rounded?: boolean;
  children: ReactNode;
}

export const BaseSection: React.FC<SectionProps> = ({
  inner = false,
  rounded = false,
  children,
}) => {
  const classes = clsx(styles.root, inner && styles.sectionInner, rounded && styles.sectionRounded);

  return <div className={classes}>{children}</div>;
};
