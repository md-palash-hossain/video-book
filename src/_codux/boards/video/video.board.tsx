import { createBoard } from '@wixc3/react-board';
import { Video } from '../../../components/video/video';

export default createBoard({
    name: 'Video',
    Board: () => <Video />
});
