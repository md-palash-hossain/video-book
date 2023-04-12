// import React from 'react';
// import styles from './book-selector.module.scss';

// interface Book {
//   id: number;
//   name: string;
//   numChapters: number;
// }

// interface Props {
//   oldTestamentBooks: Book[];
//   newTestamentBooks: Book[];
//   selectedBook: Book;
//   onBookChange: (book: Book) => void;
// }

// const BookSelector = (props: Props) => {
//   const handleBookChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedBook = event.target.value;
//     const bookList = [...props.oldTestamentBooks, ...props.newTestamentBooks];
//     const book = bookList.find((book) => book.name === selectedBook);
//     if (book) {
//       props.onBookChange(book);
//     }
//   };

//   return (
//     <div className={styles.bookSelector}>
//       <label htmlFor="book-selector">Select a book:</label>
//       <select
//         name="book-selector"
//         id="book-selector"
//         value={props.selectedBook.name}
//         onChange={handleBookChange}
//       >
//         <optgroup label="Old Testament">

//         {props.oldTestamentBooks.map((book) => (
//           <option key={book.id} value={book.name}>
//             {book.name}
//           </option>
//         ))}
//         </optgroup>

//         <optgroup label="New Testament">
//           {props.newTestamentBooks.map((book) => (
//             <option key={book.id} value={book.name}>
//               {book.name}
//             </option>
//           ))}
//         </optgroup>
//       </select>
//     </div>
//   );
// };

// export default BookSelector;

import React, { useState } from 'react';
import styles from './book-selector.module.scss';
import { Book } from '../../model/types';

// interface Book {
//     id: number;
//     name: string;
//     numChapters: number;
// }

interface Props {
    oldTestamentBooks: Book[];
    newTestamentBooks: Book[];
    selectedBook: Book;
    onBookChange: (book: Book) => void;
}

const BookSelector = (props: Props) => {
    const [selectedTab, setSelectedTab] = useState<'old' | 'new'>('old');

    const handleTabChange = (tab: 'old' | 'new') => {
        setSelectedTab(tab);
    };

    const handleBookChange = (book: Book) => {
        props.onBookChange(book);
    };

    const bookList = selectedTab === 'old' ? props.oldTestamentBooks : props.newTestamentBooks;

    return (
        <div className={styles.bookSelector}>
            <div className={styles.tabs}>
                <div
                    className={`tab ${selectedTab === 'old' ? 'selected' : ''}`}
                    onClick={() => handleTabChange('old')}
                >
                    Old Testament
                </div>
                <div
                    className={`tab ${selectedTab === 'new' ? 'selected' : ''}`}
                    onClick={() => handleTabChange('new')}
                >
                    New Testament
                </div>
            </div>

            <ul className="bookList">
                {bookList.map((book) => (
                    <li
                        key={book.id}
                        className={book.name === props.selectedBook.name ? 'selected' : ''}
                        onClick={() => handleBookChange(book)}
                    >
                        {book.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookSelector;
