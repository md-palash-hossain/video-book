import React from 'react';
import styles from './chapter-selector.module.scss';
import { Book,Chapter } from '../../model/types';

interface ChapterSelectorProps {
  book: Book;
  selectedChapter: Chapter;
  onChapterChange: (chapter: Chapter) => void;
}

const ChapterSelector: React.FC<ChapterSelectorProps> = ({
  book,
  selectedChapter,
  onChapterChange,
}) => {
  // const chapters = new Array(book.numChapters).fill(0).map((_, index) => index + 1);

  return (
    <div className={styles.chapterSelector}>
      {book.chapters.map((chapter) => (
        <div
          key={chapter.id}
          className={`${styles.chapter} ${
            chapter === selectedChapter ? styles.active : ''
          }`}
          onClick={() => onChapterChange(chapter)}
        >
          {chapter.id}
        </div>
      ))}
    </div>
  );
};

export default ChapterSelector;
