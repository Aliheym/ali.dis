import { ReactComponent as SearchIcon } from './icons/search.icon.svg';

import styles from './index.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>ali.dis</div>
      <div className={styles.searchInputPosition}>
        <div className={styles.searchInputWrapper}>
          <SearchIcon className={styles.searchInputIcon} width={20} height={20} />

          <input className={styles.searchInput} type="text" placeholder="Search for topics..." />
        </div>
      </div>
      <div className={styles.avatarPosition}>
        <div className={styles.avatar}>S</div>
      </div>
    </header>
  );
};
