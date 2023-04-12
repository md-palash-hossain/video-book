import React from 'react';
import styles from './chapter-selector.module.scss';
import { Book } from '../../model/types';

interface ChapterSelectorProps {
  book: Book;
  selectedChapter: number;
  onChapterChange: (chapter: number) => void;
}

const ChapterSelector: React.FC<ChapterSelectorProps> = ({
  book,
  selectedChapter,
  onChapterChange,
}) => {
  const chapters = new Array(book.numChapters).fill(0).map((_, index) => index + 1);

  return (
    <div className={styles.chapterSelector}>
      {chapters.map((chapter) => (
        <div
          key={chapter}
          className={`${styles.chapter} ${
            chapter === selectedChapter ? styles.active : ''
          }`}
          onClick={() => onChapterChange(chapter)}
        >
          {chapter}
        </div>
      ))}
    </div>
  );
};

export default ChapterSelector;
