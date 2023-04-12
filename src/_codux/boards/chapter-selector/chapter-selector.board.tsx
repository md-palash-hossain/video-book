import { createBoard } from '@wixc3/react-board';
import { ChapterSelector } from '../../../components/chapter-selector/chapter-selector';

export default createBoard({
    name: 'ChapterSelector',
    Board: () => <ChapterSelector />
});
