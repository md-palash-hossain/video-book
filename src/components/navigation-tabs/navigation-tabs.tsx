import React from 'react';
import styles from './navigation-tabs.module.scss';

function NavigationTabs() {
  return (
    <div className={styles.navigationTabs}>
      <button className={styles.tabButton}>Old Testament</button>
      <button className={styles.tabButton}>New Testament</button>
    </div>
  );
}

export default NavigationTabs;
