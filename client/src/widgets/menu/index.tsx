import clsx from 'clsx';

import styles from './index.module.css';

import { ReactComponent as PlusIcon } from './icons/plus.icon.svg';
import { ReactComponent as HomeIcon } from './icons/home.icon.svg';
import { ReactComponent as ForumIcon } from './icons/forum.icon.svg';
import { ReactComponent as DirectIcon } from './icons/direct.icon.svg';
import { ReactComponent as StarIcon } from './icons/star.icon.svg';
import { ReactComponent as CommunityIcon } from './icons/community.icon.svg';
import { ReactComponent as QuestionIcon } from './icons/question.icon.svg';

export const Menu = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.menuList}>
        <li className={styles.menuListItem}>
          <PlusIcon width={28} height={28} />
        </li>
        <li className={clsx(styles.menuListItem, styles.menuListItemActive)}>
          <HomeIcon width={28} height={28} />
        </li>
        <li className={styles.menuListItem}>
          <ForumIcon width={28} height={28} />
        </li>
        <li className={styles.menuListItem}>
          <DirectIcon width={28} height={28} />
        </li>
        <li className={styles.menuListItem}>
          <StarIcon width={28} height={28} />
        </li>
        <li className={styles.menuListItem}>
          <CommunityIcon width={28} height={28} />
        </li>
        <li className={styles.menuListItem}>
          <QuestionIcon width={28} height={28} />
        </li>
      </ul>
    </div>
  );
};
