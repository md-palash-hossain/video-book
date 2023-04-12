import { createBoard } from '@wixc3/react-board';
import { NavigationTabs } from '../../../components/navigation-tabs/navigation-tabs';

export default createBoard({
    name: 'NavigationTabs',
    Board: () => <NavigationTabs />
});
