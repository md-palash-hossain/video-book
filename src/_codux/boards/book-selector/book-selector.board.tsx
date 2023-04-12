import { createBoard } from '@wixc3/react-board';
import { BookSelector } from '../../../components/book-selector/book-selector';

export default createBoard({
    name: 'BookSelector',
    Board: () => <BookSelector />
});
