import { createBoard } from '@wixc3/react-board';
import { VerseSelector } from '../../../components/verse-selector/verse-selector';

export default createBoard({
    name: 'VerseSelector',
    Board: () => <VerseSelector />
});
