import React from 'react';
import styles from './verse-selector.module.scss';

interface Props {
  verses: string[];
  selectedVerse: string;
  onVerseSelect: (verse: string) => void;
}

const VerseSelector = ({ verses, selectedVerse, onVerseSelect }: Props) => {
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
