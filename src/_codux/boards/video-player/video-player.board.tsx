import { createBoard } from '@wixc3/react-board';
import { VideoPlayer } from '../../../components/video-player/video-player';

export default createBoard({
    name: 'VideoPlayer',
    Board: () => <VideoPlayer />
});
