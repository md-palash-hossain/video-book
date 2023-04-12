import { createBoard } from '@wixc3/react-board';
import { VideoList } from '../../../components/video-list/video-list';

export default createBoard({
    name: 'VideoList',
    Board: () => <VideoList />
});
