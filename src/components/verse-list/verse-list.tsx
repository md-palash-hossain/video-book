import React from 'react';
import styles from './verse-list.module.scss';
import VerseListItem from '../verse-list-item/verse-list-item';
import { Chapter } from '../../model/types';

type Props = {
  book: string;
  chapter: Chapter;
  selectedVerses: string;
  onVerseSelect: (verse: string) => void;
  onVerseDeselect: (verse: string) => void;
};

const VerseList: React.FC<Props> = ({
  book,
  chapter,
  selectedVerses,
  onVerseSelect,
  onVerseDeselect,
}) => {
  // const verses = Array.from({ length: 10 }, (_, i) => i + 1); // replace 50 with the actual number of verses in the selected chapter
  const verses = ['1-17','18-25']
  return (
    <div className={styles.verseList}>
      <h3 className={styles.verseListTitle}>
        {book+' '+chapter.id}
      </h3>
      <ul className={styles.verseListItems}>
        {verses.map((verse) => (
          <VerseListItem
            key={verse}
            verseNumber={verse}
            isSelected={selectedVerses.includes(verse)}
            onVerseSelect={onVerseSelect}
            onVerseDeselect={onVerseDeselect}
          />
        ))}
      </ul>
    </div>
  );
};

export default VerseList;
