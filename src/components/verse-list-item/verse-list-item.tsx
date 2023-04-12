import React from 'react';
import styles from './verse-list-item.module.scss';

type Props = {
  verseNumber: string;
  isSelected: boolean;
  onVerseSelect: (verse: string) => void;
  onVerseDeselect: (verse: string) => void;
};

const VerseListItem: React.FC<Props> = ({
  verseNumber,
  isSelected,
  onVerseSelect,
  onVerseDeselect,
}) => {
  const handleClick = () => {
    if (isSelected) {
      onVerseDeselect(verseNumber);
    } else {
      onVerseSelect(verseNumber);
    }
  };

  return (
    <li
      key={verseNumber}
      className={isSelected ? styles.selected : styles.unselected}
      onClick={handleClick}
    >
      {verseNumber}
    </li>
  );
};

export default VerseListItem;
