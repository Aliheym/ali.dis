import { Header } from './Header';
import { Menu } from './Menu';

import styles from './index.module.css';

function Gridder() {
  return (
    <div className={styles.root}>
      <div className={styles.headerPosition}>
        <Header />
      </div>
      <div className={styles.leftSidebarPosition}>
        <Menu />
      </div>
      <div className={styles.mainPosition}></div>
      <div className={styles.rightSidebarPosition}></div>
    </div>
  );
}

function App() {
  return <Gridder />;
}

export default App;
