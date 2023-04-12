import React from 'react';
import styles from './verse-selector.module.scss';

const VerseSelector = ({ verses, selectedVerse, onVerseSelect }) => {
  return (
    <div className={styles.verseSelector}>
      {verses.map((verse, index) => (
        <div
          key={index}
          className={`${styles.verse} ${
            verse === selectedVerse ? styles.active : ''
          }`}
          onClick={() => onVerseSelect(verse)}
        >
          {verse}
        </div>
      ))}
    </div>
  );
};

export default VerseSelector;
