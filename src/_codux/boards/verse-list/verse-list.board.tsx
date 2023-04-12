import { createBoard } from '@wixc3/react-board';
import { VerseList } from '../../../components/verse-list/verse-list';

export default createBoard({
    name: 'VerseList',
    Board: () => <VerseList />
});
