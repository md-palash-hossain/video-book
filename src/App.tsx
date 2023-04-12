import React, { useState } from "react";
import styles from "./App.module.scss";
import NavigationTabs from "./components/navigation-tabs/navigation-tabs";
import BookSelector from "./components/book-selector/book-selector";
import ChapterSelector from "./components/chapter-selector/chapter-selector";
import VerseList from "./components/verse-list/verse-list";
import VideoPlayer from "./components/video-player/video-player";
import { Book, Chapter } from "./model/types";

const App: React.FC = () => {
  // Define the list of books for the Old and New Testaments
  const [oldTestamentBooks, setOldTestamentBooks] = useState<Book[]>([
    {
      id: 1,
      name: "Genesis",
      numChapters: 50,
      chapters: [
        {
          id: 1,
          verses: ["1-31"],
        },
        {
          id: 2,
          verses: ["31-50"],
        },
        {
          id: 3,
          verses: ["51-80"],
        },
      ],
    },
    {
      id: 2,
      name: "Genesis-alternetive",
      numChapters: 50,
      chapters: [
        {
          id: 1,
          verses: ["1-31"],
        },
      ],
    },
    {
      id: 3,
      name: "Genesis-demo",
      numChapters: 50,
      chapters: [
        {
          id: 1,
          verses: ["1-31"],
        },
      ],
    },
    // Add other Old Testament books here...
  ]);
  const [newTestamentBooks, setNewTestamentBooks] = useState<Book[]>([
    {
      id: 1,
      name: "Matthew",
      numChapters: 28,
      chapters: [
        {
          id: 1,
          verses: ["1-17", "18-25"],
        },
        {
          id: 2,
          verses: ["18-28", "29-40"],
        },
        {
          id: 3,
          verses: ["41-47", "48-55"],
        },
      ],
    },
    {
      id: 2,
      name: "Mark",
      numChapters: 28,
      chapters: [
        {
          id: 1,
          verses: ["1-17", "18-25"],
        },
      ],
    },
    {
      id: 3,
      name: "Book-3",
      numChapters: 28,
      chapters: [
        {
          id: 1,
          verses: ["1-17", "18-25"],
        },
      ],
    },
    // Add other New Testament books here...
  ]);

  // Define state for the currently selected book, chapter, and verse
  const [selectedBook, setSelectedBook] = useState<Book>(oldTestamentBooks[0]);
  const [selectedChapter, setSelectedChapter] = useState<Chapter>(
    oldTestamentBooks[0].chapters[0]
  );
  const [selectedVerses, setSelectedVerses] = useState<string>("");

  // Define a handler function for when the selected book changes
  const handleBookChange = (book: Book) => {
    setSelectedBook(book);
    setSelectedChapter(book.chapters[0]);
    setSelectedVerses(book.chapters[0].verses[0]);
  };

  // Define a handler function for when the selected chapter changes
  const handleChapterChange = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setSelectedVerses(chapter.verses[0]);
  };

  // Define a handler function for when a verse is selected
  const handleVerseSelect = (verse: string) => {
    setSelectedVerses(verse);
  };

  // Define a handler function for when a verse is deselected
  const handleVerseDeselect = (verse: string) => {
    setSelectedVerses((selectedVerses) =>
      selectedVerses.filter((v) => v !== verse)
    );
  };

  return (
    <div className={styles.app}>
      <NavigationTabs />
      <div className={styles.content}>
        <div className={styles.main}>
          <VideoPlayer
            selectedBook={selectedBook}
            selectedChapter={selectedChapter}
            selectedVerses={selectedVerses}
          />
          <VerseList
            book={selectedBook.name}
            chapter={selectedChapter}
            selectedVerses={selectedVerses}
            onVerseSelect={handleVerseSelect}
            onVerseDeselect={handleVerseDeselect}
          />
        </div>
        <div className={styles.sidebar}>
          <BookSelector
            oldTestamentBooks={oldTestamentBooks}
            newTestamentBooks={newTestamentBooks}
            selectedBook={selectedBook}
            onBookChange={handleBookChange}
          />
          <ChapterSelector
            book={selectedBook}
            selectedChapter={selectedChapter}
            onChapterChange={handleChapterChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
