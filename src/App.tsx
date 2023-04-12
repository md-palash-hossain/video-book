import React, { useState } from 'react';
import styles from './App.module.scss';
import NavigationTabs from './components/navigation-tabs/navigation-tabs';
import BookSelector from './components/book-selector/book-selector';
import ChapterSelector from './components/chapter-selector/chapter-selector';
import VerseList from './components/verse-list/verse-list';
import VideoPlayer from './components/video-player/video-player';
import { Book } from './model/types';

const App: React.FC = () => {
    // Define the list of books for the Old and New Testaments
    const [oldTestamentBooks, setOldTestamentBooks] = useState<Book[]>([
        { id: 1, name: 'Genesis', numChapters: 50 },
        // Add other Old Testament books here...
    ]);
    const [newTestamentBooks, setNewTestamentBooks] = useState<Book[]>([
        { id: 2, name: 'Matthew', numChapters: 28 },
        // Add other New Testament books here...
    ]);

    // Define state for the currently selected book, chapter, and verse
    const [selectedBook, setSelectedBook] = useState<Book>(oldTestamentBooks[0]);
    const [selectedChapter, setSelectedChapter] = useState<number>(1);
    const [selectedVerses, setSelectedVerses] = useState<string[]>([]);

    // Define a handler function for when the selected book changes
    const handleBookChange = (book: Book) => {
        setSelectedBook(book);
        setSelectedChapter(1);
        setSelectedVerses([]);
    };

    // Define a handler function for when the selected chapter changes
    const handleChapterChange = (chapter: number) => {
        setSelectedChapter(chapter);
        setSelectedVerses([]);
    };

    // Define a handler function for when a verse is selected
    const handleVerseSelect = (verse: string) => {
        setSelectedVerses((selectedVerses) => [...selectedVerses, verse]);
    };

    // Define a handler function for when a verse is deselected
    const handleVerseDeselect = (verse: string) => {
        setSelectedVerses((selectedVerses) => selectedVerses.filter((v) => v !== verse));
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
