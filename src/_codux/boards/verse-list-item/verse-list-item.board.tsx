import { createBoard } from '@wixc3/react-board';
import { VerseListItem } from '../../../components/verse-list-item/verse-list-item';

export default createBoard({
    name: 'VerseListItem',
    Board: () => <VerseListItem />
});
