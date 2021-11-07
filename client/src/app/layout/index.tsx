import React from 'react';

import { Header } from 'widgets/header';
import { Menu } from 'widgets/menu';

import styles from './index.module.css';

export const PageLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.headerPosition}>
        <Header />
      </div>
      <div className={styles.leftSidebarPosition}>
        {/* TODO: pass items as props */}
        <Menu />
      </div>
      <div className={styles.mainPosition}>{children}</div>
      <div className={styles.rightSidebarPosition}></div>
    </div>
  );
};
